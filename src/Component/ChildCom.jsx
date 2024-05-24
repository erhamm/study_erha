import React from "react";

const ChildCom = ({ onSetMessage }) => {
  const onClickMessage = () => {
    onSetMessage("erha");
  };
  return (
    <div>
      <p>this is ChildCom</p>
      <button onClick={onClickMessage}>Message</button>
    </div>
  );
};

export default ChildCom;
