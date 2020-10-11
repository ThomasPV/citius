import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { username: null, password: null }
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    let result = this.authService.login(this.user.username, this.user.password);
    if(!!result){
      this.router.navigate(['/shop/list']);
    }else{
      alert("Invalid Username / Password");
    }
  }
  showErrors(f:FormGroup){
    f.markAllAsTouched();
  }

}
