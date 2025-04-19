import { createReducer, on } from "@ngrx/store";
import { AuthState } from "./auth.state";
import * as AuthActions from './auth.actions';


export const initialState:AuthState = {
  token: null,
  initialized: false
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loadTokenFromStorage, (state, { token }) => ({
    ...state,
    token,

    initialized: true
  })),
  on(AuthActions.setToken, (state, { token }) => ({
    ...state,
    token,

  })),
  on(AuthActions.clearToken, (state) => ({
    ...state,
    token: null
  }))
);
