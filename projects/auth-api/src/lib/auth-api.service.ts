import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthApiEndPoints } from './enums/AuthApi.endPoints';
import { AuthApiAdaptorService } from './adaptor/auth-api.adaptor';
import { AuthAPI } from './base/AuthAPI';
import { LoginData } from './interfaces/LoginData';
import { LoginRes } from './interfaces/LoginRes';
import { RegisterData } from './interfaces/RegisterData';
import { ForgotPasswordData } from './interfaces/ForgotPasswordData';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService  implements AuthAPI {

  constructor(private _http:HttpClient ,private _authApiAdaptorService:AuthApiAdaptorService ) { }

  login(data:LoginData): Observable<LoginRes> {
    return  this._http.post(AuthApiEndPoints.LOGIN, data).pipe(
      map((res:any) => this._authApiAdaptorService.adapt(res)),
      catchError((error) => of(error))
    );
  }
  register(data: RegisterData): Observable<LoginRes> {
    return this._http.post(AuthApiEndPoints.SIGNUP, data).pipe(
      map((res:any) => this._authApiAdaptorService.adapt(res)),
      catchError((error) => of(error))
    )
  }
  forgotPassword(data: ForgotPasswordData): Observable<any> {
    return this._http.post(AuthApiEndPoints.FORGOT_PASSWORD, data).pipe(
      map((res:any) => this._authApiAdaptorService.adapt(res)),
      catchError((error) => of(error))
    )
  }
}
