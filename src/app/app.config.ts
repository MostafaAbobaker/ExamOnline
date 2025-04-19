import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { generalInterceptor } from './shared/interceptor/general.interceptor';
import { provideStore } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([generalInterceptor]) // Correct way to add the interceptor
    ),
    provideStore({
      token : authReducer
    }),
    provideEffects(
      AuthEffects
    )
],
};
