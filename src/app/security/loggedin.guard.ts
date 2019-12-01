import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import { routeConstant } from '../services/services-constants';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate{
    
    constructor(
        private loginSvc: LoginService,
        private router: Router,
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginSvc.isLoggedIn()) {
            return true;
        } else {
            this.router.navigateByUrl(routeConstant.login);
            return false;
        }
    }
}