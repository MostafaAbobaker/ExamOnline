import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.apiUrl
  // Clone the request with the base URL
  let modifiedReq = req.clone({
    url: `${baseUrl}${req.url}`,
  });
  console.log('interceptor', modifiedReq.url);

  return next(modifiedReq);
};
