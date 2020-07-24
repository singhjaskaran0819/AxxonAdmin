import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { REGEX, AUTH_PATHS } from '../../constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  LINKS = {
    FORGOT_PASSWORD: `/${AUTH_PATHS.FORGOT_PASSWORD}`
  }

  public signInForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(REGEX.EMAIL)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value)
    } else {
      Object.keys(this.signInForm.controls).forEach(key => {
        this.signInForm.controls[key].markAsTouched({ onlySelf: true });
      });
    }
  }

}
