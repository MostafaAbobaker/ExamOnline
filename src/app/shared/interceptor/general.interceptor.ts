import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.apiUrl;
  const localStorageService = inject(LocalStorageService);
  const LoaderService$ = inject(LoaderService);
  const token = localStorageService.getItem<string>('token');
  LoaderService$.show();
  // Clone and modify the request
  let modifiedReq: HttpRequest<unknown>;

  if (token) {
    modifiedReq = req.clone({
      url: `${baseUrl}${req.url}`,
      setHeaders: {
        // Authorization: `Bearer ${token}`  // Standard format for auth tokens
        // OR if your backend expects exactly 'token' header:
        token: token
      }
    });
  } else {
    modifiedReq = req.clone({
      url: `${baseUrl}${req.url}`
    });
  }

  return next(modifiedReq).pipe(
    finalize(() => LoaderService$.hide()),
  );


};
