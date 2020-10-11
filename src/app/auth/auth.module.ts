import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { LoginGuard } from './../guards/login.guard';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'login',component:LoginComponent, canActivate:[LoginGuard]}
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
