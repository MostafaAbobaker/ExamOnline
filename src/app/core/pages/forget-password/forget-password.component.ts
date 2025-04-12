import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { CommonModule } from '@angular/common';
import { VerifyCodeComponent } from '../verify-code/verify-code.component';
import { SetPasswordComponent } from "../set-password/set-password.component";

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule, CommonModule, VerifyCodeComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  loading :boolean = false;
  verifyCode:boolean = false;
  constructor(private _authAPIService:AuthApiService , private _router:Router ) { }
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  forgetPassword() {
    this.loading = true;
    console.log(this.forgetForm.value);
    this._authAPIService.forgotPassword(this.forgetForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.loading = false;
        this.verifyCode = true;
        localStorage.setItem('email', this.forgetForm.value.email);
        // this._router.navigate(['../verify-code']);
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      }
    });
  }
}
