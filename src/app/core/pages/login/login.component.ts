import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { Store } from '@ngrx/store';
import { setToken } from '../../../store/auth.actions';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  passwordStatus: boolean = false;
  loading: boolean = false;
  constructor(
    private _authApiService: AuthApiService,
    private _router: Router,
    private _localStorageService: LocalStorageService,
    private _store:Store
  ) { }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  login() {
    console.log(this.loginForm.value);
    this.loading = true;
    this._authApiService.login(this.loginForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this._localStorageService.setItem('token', data.token)
        this.loading = false;
        // this._store.dispatch(setToken({token:data.token, rememberMe: true}))

        this._router.navigate(['/Dashboard'])
      },
      error: (error) => {
        alert(error)
        console.log(error);
        this.loading = false;

      }
    })
  }
}
