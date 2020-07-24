import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css'],
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastrComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public toastService: ToastrService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

}
