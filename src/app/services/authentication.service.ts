import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor(private router: Router) { }
  isLoggedIn(){
    return !!localStorage.getItem('user')
  }

  login(username, pass){
    if(username == 'admin' && pass == 'admin'){
      localStorage.setItem('user',JSON.stringify({isActivated:true}));
      return true;
    }else{
      return false;
    }
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
