import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { AUTH_PATHS, INTERNAL_PATHS } from './constants';
import { AuthGuardService } from './core/services/auth-guard.service';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: AUTH_PATHS.SIGN_IN, pathMatch: 'full' },
  { path: AUTH_PATHS.SIGN_IN, component: SignInComponent },
  { path: AUTH_PATHS.FORGOT_PASSWORD, component: ForgotPasswordComponent },
  { path: AUTH_PATHS.RESET_PASSWORD_BY_TOKEN, component: ResetPasswordComponent },
  { path: INTERNAL_PATHS.ADMIN, canActivate: [AuthGuardService], loadChildren: () => import('./internal/internal.module').then(m => m.InternalModule) },
  { path: '**', redirectTo: AUTH_PATHS.SIGN_IN, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
