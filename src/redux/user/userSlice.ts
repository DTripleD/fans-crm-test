import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  isLogedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logOut: (state) => {
      state.user.name = "";
      state.user.email = "";
      state.user.password = "";
      state.isLogedIn = false;
    },
    logIn: (state, action) => {
      state.isLogedIn = true;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    register: (state, action) => {
      state.isLogedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { logOut, logIn, register } = userSlice.actions;

const userPersistConfig = {
  key: "user",
  storage,
};
export const persistedUserReducer = persistReducer(
  userPersistConfig,
  userReducer
);
