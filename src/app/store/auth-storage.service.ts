import { Injectable } from '@angular/core';
import { clearToken } from './auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private readonly TOKEN_KEY = 'auth_token'

  getToken() :string | null {
    return localStorage.getItem(this.TOKEN_KEY) ||
            sessionStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token:string , rememberMe:boolean = false): void {
    console.log('this Token Service =>  ');

    if(rememberMe) {
      localStorage.setItem(this.TOKEN_KEY, token);
    } else {
      sessionStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  clearToken():void {
    localStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
