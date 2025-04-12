import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { CommonModule } from '@angular/common';
import { SetPasswordComponent } from "../set-password/set-password.component";

@Component({
  selector: 'app-verify-code',
  imports: [ReactiveFormsModule, CommonModule, SetPasswordComponent],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {
  loading:boolean = false;
  setPassword :boolean = false;

  constructor(private _authApiService:AuthApiService ) {

  }
  verifyForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
    verify() {
      console.log(this.verifyForm.value);
      this._authApiService.verifyCode(this.verifyForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this.setPassword = true;
        },
        error: (error) => {
          console.log(error);
          alert(error.error.message);
        }

      })
    }
}
