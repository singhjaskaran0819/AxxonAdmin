import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InternalModule } from './internal/internal.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrComponent } from './common/toastr/toastr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ToastrComponent
  ],
  imports: [
    InternalModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
