import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-set-password',
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})
export class SetPasswordComponent implements OnInit {
  passwordStatus:boolean = false;
  rePasswordStatus:boolean = false;
  loading:boolean = false;
  constructor(private _authApiService:AuthApiService) { }
  setPasswordForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [Validators.required,  Validators.pattern(/^[A-Z].{5,}$/)]),
      confirmPassword: new FormControl('', [Validators.required,  Validators.pattern(/^[A-Z].{5,}$/)]),
  });

    passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
      const password = group.get('newPassword')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { notMatching: true };
    }
    ngOnInit(): void {
      const email = localStorage.getItem('email'); // Retrieve email from localStorage
      if (email) {
        this.setPasswordForm.patchValue({ email }); // Set email in the form
      }
    }
    setPassword() {
      console.log(this.setPasswordForm.value);
      this._authApiService.resetPassword(this.setPasswordForm.value).subscribe({
        next: (data) => {
          console.log(data);
          alert("Password reset successfully");
          localStorage.removeItem('email');
        },
        error: (error) => {
          console.log(error);
          alert(error.error.message);
        }
      });
    }


}
