// auth.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthStorageService } from './auth-storage.service';
import * as AuthActions from './auth.actions';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';



@Injectable()
export class AuthEffects {
  initAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initAuth),
      map(() => {
        const token = this.authStorage.getToken();
        return AuthActions.loadTokenFromStorage({ token });
      })
    )
  );

  setToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.setToken),
        tap(({ token, rememberMe }) => {
          debugger
          console.log('This token =>', token , rememberMe);

          if (token) {

            this.authStorage.setToken(token, rememberMe);
          }
        })
      ),
    { dispatch: false }
  );

  clearToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.clearToken),
        tap(() => {
          this.authStorage.clearToken();
        })
      ),
    { dispatch: false }
  );

  private readonly  actions$= inject(Actions)
  private readonly  authStorage= inject(AuthStorageService)

  /* constructor(
    private actions$: Actions,
    private authStorage: AuthStorageService
  ) {} */
}
