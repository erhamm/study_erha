import { configureStore } from "@reduxjs/toolkit";
import { stuSlice } from "./slice/student";
import { schSlice } from "./slice/school";
import { logSlice } from "./slice/isLogin";

// export const { sayName, sayAddress } = stuSlice.actions;
// export const { needSch, changeAddress } = schSlice.actions;
const store = configureStore({
  reducer: {
    student: stuSlice.reducer,
    school: schSlice.reducer,
    islog: logSlice.reducer,
  },
});
export default store;
