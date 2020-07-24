import { ToastrService } from './../../common/toastr/toastr.service';
import { REGEX, SUCCESS_MSG, AUTH_PATHS } from './../../constants';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  LINKS = {
    SIGN_IN: `/${AUTH_PATHS.SIGN_IN}`
  }

  public forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastrService: ToastrService) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(REGEX.EMAIL)])]
    })
  }

  ngOnInit(): void {
  }

  sendEmail() {
    if (this.forgotPasswordForm.valid) {
      this.toastrService.showToastr({type: 'success', message: SUCCESS_MSG.LINK_SENT})
      this.router.navigateByUrl(this.LINKS.SIGN_IN)
    } else {
      Object.keys(this.forgotPasswordForm.controls).forEach(key => {
        this.forgotPasswordForm.controls[key].markAsTouched({ onlySelf: true })
      })
    }
  }

}
