import { LOGIN, LOGOUT } from "./types";

export const login = (value) => ({
  type: LOGIN,
  payload: value,
});

export const logout = () => ({
  type: LOGOUT,
});
