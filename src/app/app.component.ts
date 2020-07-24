import { ToastrService } from './common/toastr/toastr.service';
import { Component } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
    const token = localStorage.getItem("accessToken");
    if (token && token !== "undefined") {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
    }
  }

}
