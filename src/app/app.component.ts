import { AuthenticationService } from './services/authentication.service';
import { ShopControllerService } from 'src/app/services/shop-controller.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'confectionary';
  items: MenuItem[];

  types = [];
  /**
   *
   */
  constructor(private shopController: ShopControllerService,public auth:AuthenticationService) {

  }
  ngOnInit(){
    this.shopController.getShops();
  }
}
