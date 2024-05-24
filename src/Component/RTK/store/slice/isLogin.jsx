import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
  name: "islog",
  initialState: () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return {
        isLogged: false,
        jwt: null,
        user: null,
      };
    }
    return {
      isLogged: true,
      jwt,
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  reducers: {
    Login(state, action) {
      state.isLogged = true;
      state.jwt = action.payload.jwt;
      state.user = action.payload.user;

      localStorage.setItem("jwt", state.jwt);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    Logout(state, action) {
      state.isLogged = false;
      state.jwt = null;
      state.user = null;

      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
    },
  },
});
export const { Login, Logout } = logSlice.actions;
