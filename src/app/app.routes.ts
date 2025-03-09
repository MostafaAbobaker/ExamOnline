import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/Layout/auth-layout/auth-layout.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { ForgetPasswordComponent } from './core/pages/forget-password/forget-password.component';
import { SetPasswordComponent } from './core/pages/set-password/set-password.component';
import { VerifyCodeComponent } from './core/pages/verify-code/verify-code.component';

export const routes: Routes = [

  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Default route

  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
      { path: 'verify-code', component: VerifyCodeComponent },
      { path: 'set-password', component: SetPasswordComponent },
    ],
  },
  // Add more routes here...
];
