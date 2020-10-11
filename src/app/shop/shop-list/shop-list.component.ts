import { ShopControllerService } from 'src/app/services/shop-controller.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/models/shop.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shops$: Observable<Shop[]>;
  constructor(public shopController:ShopControllerService) { }

  ngOnInit(): void {
    this.shops$ = this.shopController.getShops();
  }
  deleteShop(id){
    if(confirm("Do you want to proceed with the delete ?")) this.shopController.deleteShop(id);

  }

}
