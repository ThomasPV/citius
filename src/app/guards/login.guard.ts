import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;
    // return true;
    if(!this.auth.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/shop/list']);
      return false;

    }
  }
}
