import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-set-password',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})
export class SetPasswordComponent {
  passwordStatus:boolean = false;
  rePasswordStatus:boolean = false;

  setPasswordForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
    setPassword() {
      console.log(this.setPasswordForm.value);
    }
}
