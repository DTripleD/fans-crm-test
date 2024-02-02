import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedUserReducer } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
