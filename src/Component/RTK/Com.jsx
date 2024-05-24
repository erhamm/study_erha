import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sayName } from "./store/slice/student";

const Com = () => {
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();
  //   console.log("state=>", state, student);
  const [products, setProducts] = useState([
    { name: "aaa", type: "a01" },
    { name: "bbb", type: "b01" },
    { name: "ccc", type: "c01" },
  ]);
  const onChangeName = () => {
    dispatch(sayName("1111"));
  };
  const onChangeProductsName = (e, index) => {
    console.log("e=>", e.target.value);
    const updatedProducts = [...products];
    updatedProducts[index].name = e.target.value;
    setProducts(updatedProducts);
  };
  const onChangeProductsType = (e, index) => {
    const updatedProducts = [...products];
    updatedProducts[index].type = e.target.value;
    setProducts(updatedProducts);
  };
  const onClickInput = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].type = "ppp";
    setProducts(updatedProducts);
  };
  console.log("products=>", products);
  return (
    <div>
      {student.name}
      <button onClick={onChangeName}>改名</button>
      <hr />
      {products.map((item, index) => {
        return (
          <div key={index}>
            <span>姓名：</span>
            <input
              type="text"
              value={products.name}
              onChange={(e) => onChangeProductsName(e, index)}
            />
            <span>型号：</span>
            <input
              type="text"
              value={products.type}
              onChange={(e) => onChangeProductsType(e, index)}
            />
            <button onClick={() => onClickInput(index)}>修改</button>
          </div>
        );
      })}
    </div>
  );
};

export default Com;
