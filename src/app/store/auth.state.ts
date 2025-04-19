// auth.state.ts
export interface AuthState {
  token: string | null;
  initialized:boolean;
  // other auth-related state if needed
}

