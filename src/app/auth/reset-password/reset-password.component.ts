import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../common/toastr/toastr.service';
import { SUCCESS_MSG, AUTH_PATHS, ERROR_MSG } from '../../constants';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  FORM_ERRORS = {
    NEW_PASSWORD_REQUIRED: 'Please enter new password',
    CONFIRM_PASSWORD_REQUIRED: 'Please re-enter new password',
    MIN_CHAR: 'Minimum 8 characters required'
  }

  public resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastrService: ToastrService, private route: ActivatedRoute) {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("==> ", params);
    })
  }

  resetPassword() {
    if (this.resetPasswordForm.valid) {
      if (this.resetPasswordForm.controls['newPassword'].value === this.resetPasswordForm.controls['confirmPassword'].value) {
        this.toastrService.showToastr({ type: 'success', message: SUCCESS_MSG.PASSWORD_RESET_SUCCESSFULLY })
        this.router.navigateByUrl(AUTH_PATHS.SIGN_IN)
      } else {
        this.toastrService.showToastr({ type: 'error', message: ERROR_MSG.PASSWORD_NOT_MATCHED })
      }
    } else {
      Object.keys(this.resetPasswordForm.controls).forEach(key => {
        this.resetPasswordForm.controls[key].markAsTouched({ onlySelf: true })
      })
    }
  }

}
