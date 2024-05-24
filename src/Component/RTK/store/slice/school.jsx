import { createSlice } from "@reduxjs/toolkit";

export const schSlice = createSlice({
  name: "sch",
  initialState: {
    name: "erhaschool",
    history: 20,
    address: "HZ",
  },
  reducers: {
    needSch(state, action) {
      state.name = action.payload;
    },
    changeAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { needSch, changeAddress } = schSlice.actions;
