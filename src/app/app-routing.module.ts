import { ShopGuard } from './guards/shop.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/shop/list'},
  {path:'shop',canLoad:[ShopGuard], loadChildren:() => import('src/app/shop/shop.module').then(m=>m.ShopModule)},
  {path:'', loadChildren:() => import('src/app/auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
