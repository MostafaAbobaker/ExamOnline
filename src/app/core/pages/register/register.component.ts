import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
passwordStatus:boolean = false;
rePasswordStatus:boolean = false;
loading:boolean = false;
constructor(private _authApiService:AuthApiService,
  private _router:Router
) {}

registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)  ]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,  Validators.pattern(/^[A-Z].{5,}$/)]),
    rePassword: new FormControl('', [Validators.required,  Validators.pattern(/^[A-Z].{5,}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}/)]),
  });
  register() {
    console.log(this.registerForm.value);
    this.loading = true;
    this._authApiService.register(this.registerForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.loading = false;
        this._router.navigate(['../auth/login']);
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      }
    });
  }
}
