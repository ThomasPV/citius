import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shop } from '../models/shop.model';
import { Data } from '@angular/router';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ShopControllerService {
  url = environment.url;
  shops$: BehaviorSubject<Array<Shop>> = new BehaviorSubject<Array<Shop>>([]);

  constructor(private http: HttpClient) {}
  deleteShop(id){
    let shops = this.shops$.getValue();
    shops = shops.filter(el=>el.id != id);
    this.shops$.next(shops);
  }
  addShop(shop:Shop){
    debugger;
    let shops = this.shops$.getValue().slice();
    shops.push(shop);
    this.shops$.next(shops);
  }
  getShops(): Observable<any> {
    if(!!this.shops$.getValue().length){
      return this.shops$.asObservable();
    }
    return this.http
      .get(`${environment.url}/assets/data/shops.json`)
      .pipe(
        map((el: Data) => el.shops),
        tap((data) => {
          console.table(data);
          this.shops$.next(data);

        })
      );
  }
  getShopById(id){
    let shops = this.shops$.getValue();
    let match = shops.find(el=>el.id == id);
    return match;
  }
  updateShop(shop:Shop){
    let shops = this.shops$.getValue();
    shops = shops.filter(el=>el.id != shop.id);
    shops.push(shop);
    this.shops$.next(shops);

  }
}
