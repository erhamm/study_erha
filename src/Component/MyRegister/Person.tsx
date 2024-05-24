import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Person() {
  const state = useSelector((state: any) => state.islog);
  let username = state?.user?.username;
  return <div>{username}</div>;
}
