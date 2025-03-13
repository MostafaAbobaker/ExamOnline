import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  constructor(private _authAPIService:AuthApiService , private _router:Router ) { }
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  forgetPassword() {
    console.log(this.forgetForm.value);
    this._authAPIService.forgotPassword(this.forgetForm.value).subscribe({
      next: (data) => {
        console.log(data);
        // this._router.navigate(['../verify-code']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
