type Item = {
  k: string;
  value: string;
};
const data1: Item[][] = [
  [
    { k: "k1", value: "v1" },
    { k: "k2", value: "v2" },
  ],
  [
    { k: "k1", value: "v1" },
    { k: "k2", value: "v2" },
  ],
];

const obj = {
  k1: "v1",
};

const fn1 = (data: Item[][]): number => {
  let res;
  data.forEach((subA) => {
    subA.forEach((item) => {
      res[item.k] = item.value;
    });
  });
  return res;
};

data1.reduce((acc, subA) => {
  subA.forEach((item) => {
    acc[item.k] = item.value;
  });
  return acc;
}, {});

console.log(fn1(data1));
