import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { LoginAPIData, LoginRes } from '../interfaces/LoginRes';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdaptorService implements Adaptor {

  constructor() { }

  adapt(data:LoginAPIData): LoginRes {
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email
    };
  }
}
