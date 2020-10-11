import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class ShopGuard implements CanLoad {
  constructor(private auth: AuthenticationService, private router: Router) { }

  canLoad(route: Route) {
    if(this.auth.isLoggedIn()){
      return true
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
