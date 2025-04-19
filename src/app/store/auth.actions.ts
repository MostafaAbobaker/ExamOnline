// auth.actions.ts
import { createAction, props } from '@ngrx/store';

export const initAuth = createAction('[Auth] Initialize');
export const setToken = createAction(
  '[Auth] Set Token',
  props<{ token: string; rememberMe?: boolean }>()
);
export const clearToken = createAction('[Auth] Clear Token');
export const loadTokenFromStorage = createAction(
  '[Auth] Load Token From Storage',
  props<{ token: string | null }>()
);
