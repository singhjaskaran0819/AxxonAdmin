import { Injectable, TemplateRef } from '@angular/core';
import { TOASTR } from '../../constants'
import { switchMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  TOASTR_CLASS = {
    success: { classname: TOASTR.SUCCESS, delay: TOASTR.TOASTR_DELAY },
    error: { classname: TOASTR.ERROR, delay: TOASTR.TOASTR_DELAY },
    warning: { classname: TOASTR.WARNING, delay: TOASTR.TOASTR_DELAY }
  }

  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showToastr(toastrObj) {
  switch (toastrObj.type) {
    case 'success':
      this.show(toastrObj.message, this.TOASTR_CLASS['success']);
      break;
    case 'danger':
      this.show(toastrObj.message, this.TOASTR_CLASS['danger']);
      break;
    case 'warning':
      this.show(toastrObj.message, this.TOASTR_CLASS['warning']);
      break;
    case 'error':
      this.show(toastrObj.message, this.TOASTR_CLASS['error']);
      break;
    default:
      this.show(toastrObj.message);
      break;
  }
}
}
