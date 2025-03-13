import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthApiEndPoints } from './enums/AuthApi.endPoints';
import { AuthApiAdaptorService } from './adaptor/auth-api.adaptor';
import { AuthAPI } from './base/AuthAPI';
import { LoginData } from './interfaces/LoginData';
import { LoginRes } from './interfaces/LoginRes';

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

}
