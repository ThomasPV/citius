import { ShopAddComponent } from './../shop/shop-add/shop-add.component';
  import { Injectable } from '@angular/core';
  import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
  import { Observable } from 'rxjs';

  @Injectable({providedIn: 'root'})
  export class ShopFormGuard implements CanDeactivate<ShopAddComponent> {
    canDeactivate(
      component: ShopAddComponent,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      return component.canDeactivate ?component.canDeactivate() : true ;
    }
  }
