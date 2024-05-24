import Draggable from "react-draggable";

const Tuo = () => {
  return (
    <div className="App">
      {/* <Draggable handle=".drag-handler" bounds=".App"> */}
      <Draggable size={200} defaultPosition={{ x: 25, y: 25 }}>
        <div>
          <Box />
        </div>
      </Draggable>
    </div>
  );
};

export default Tuo;

const Box = () => {
  return <div className="drag-handler">1111</div>;
};
