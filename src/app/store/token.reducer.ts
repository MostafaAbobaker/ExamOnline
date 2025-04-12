import { createReducer, on } from "@ngrx/store";
import { loginSuccess, logout } from "./token.actions";

const initialState = '';

export const tokenReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token }) => token),
  on(logout, () => initialState)
);
