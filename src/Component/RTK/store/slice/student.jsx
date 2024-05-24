import { createSlice } from "@reduxjs/toolkit";

export const stuSlice = createSlice({
  name: "stu",
  initialState: {
    name: "erhastu",
    age: 20,
    address: "HZ",
  },
  reducers: {
    sayName(state, action) {
      state.name = action.payload;
    },
    sayAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { sayName, sayAddress } = stuSlice.actions;
