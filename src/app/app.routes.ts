import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/Layout/auth-layout/auth-layout.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { ForgetPasswordComponent } from './core/pages/forget-password/forget-password.component';
import { HomeLayoutComponent } from './core/Layout/home-layout/home-layout.component';
import { DashboardComponent } from './features/pages/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';
import { CourseDetailsComponent } from './features/pages/course-details/course-details.component';

export const routes: Routes = [

  {
    path: '',
    canActivate: [authGuard],
    component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'course-details/:id', component: CourseDetailsComponent },
    ],
  },
  {
    path: '',
    canActivate: [noAuthGuard],
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
    ],
  },

];
