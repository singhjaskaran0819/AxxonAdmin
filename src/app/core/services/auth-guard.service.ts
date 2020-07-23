import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGuardService implements CanActivate, CanDeactivate<CanComponentDeactivate> {
    constructor(
        private router: Router,
        private toastr: ToastrService
    ) {
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigateByUrl('/sign-in');
            return false;
        } else {
            return true;
        }
    }

    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }

    loginToProceed() {
        this.toastr.warning('Please login to redirect to this page');
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            return true;
        } else {
            this.loginToProceed();
            return false;
        }
    }
}