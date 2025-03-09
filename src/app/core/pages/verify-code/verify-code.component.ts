import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

  verifyForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    verify() {
      console.log(this.verifyForm.value);
    }
}
