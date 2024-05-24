document.getElementById("file-input").addEventListener("change", async () => {
  const file = event.target.files[0];
  const chunkSize = 1 * 1024 * 1024; // 每片1MB
  const totalSize = file.size;
  const totalChunks = Math.ceil(totalSize / chunkSize);

  // 获取已上传分片信息，这里假设从LocalStorage获取
  let uploadedChunks = JSON.parse(localStorage.getItem("uploadedChunks")) || [];

  // 检查是否有未完成的分片上传，执行断点续传
  if (uploadedChunks.length > 0) {
    await resumeUpload(file, chunkSize, totalChunks, uploadedChunks);
  } else {
    // 全新的文件上传
    await initUpload(file, chunkSize, totalChunks);
  }
});

async function initUpload(file, chunkSize, totalChunks) {
  const chunks = Array.from({ length: totalChunks }, (_, index) => ({
    start: index * chunkSize,
    end: Math.min(index * chunkSize + chunkSize, file.size),
    index,
  }));

  await Promise.all(
    chunks.map(async (chunk) => {
      await uploadChunk(file, chunk);
      updateProgress();
    })
  );
}

async function resumeUpload(file, chunkSize, totalChunks, uploadedChunks) {
  // 从本地存储中加载已上传的分片索引，并与服务器确认
  // 这里仅用伪代码表示
  let confirmedChunks = await confirmUploadedChunksWithServer(uploadedChunks);

  // 计算剩余未上传的分片
  let remainingChunks = createRemainingChunksList(
    file,
    chunkSize,
    totalChunks,
    confirmedChunks
  );

  await Promise.all(
    remainingChunks.map(async (chunk) => {
      await uploadChunk(file, chunk);
      updateProgress();
    })
  );
}

async function uploadChunk(file, { start, end, index }) {
  const chunk = file.slice(start, end);
  const formData = new FormData();
  formData.append("chunk", chunk);
  formData.append("chunkIndex", index);
  formData.append("totalChunks", totalChunks);

  // 上传分片到服务器，此处使用伪代码
  const response = await fetch("/api/upload/chunk", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload chunk");
  }

  // 更新本地存储的已上传分片信息
  localStorage.setItem(
    "uploadedChunks",
    JSON.stringify([...uploadedChunks, index])
  );
}

function createRemainingChunksList(
  file,
  chunkSize,
  totalChunks,
  confirmedChunks
) {
  // 根据已确认的分片列表计算剩余未上传的分片
  // 返回剩余分片的数组 [{start, end, index}]
  // （此处省略具体实现）
}

function updateProgress() {
  // 获取已上传的分片总数
  let uploadedCount = localStorage.getItem("uploadedChunks").length;

  // 计算并显示上传进度
  let progress = (uploadedCount / totalChunks) * 100;
  document.getElementById("upload-progress").textContent = `${Math.round(
    progress
  )}%`;
}

// 伪代码 - 后端接口
// POST /api/upload/chunk
// 接收分片数据，存储并返回结果（成功或失败）
