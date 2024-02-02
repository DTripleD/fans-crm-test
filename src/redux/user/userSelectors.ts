import { store } from "../store";

type RootState = ReturnType<typeof store.getState>;

export const selectIsLoggedIn = (state: RootState) => state.user.isLogedIn;

export const userSelector = (state: RootState) => state.user.user;
