import { ShopControllerService } from 'src/app/services/shop-controller.service';
import { ShopLookupsService } from './../shop-lookups.service';
import { CanDeactivate, Router } from '@angular/router';
import { Shop } from './../../models/shop.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.css']
})
export class ShopAddComponent implements OnInit {
  @ViewChild('form',{static:true}) form: NgForm;
  navAway = false;
  shop:Shop = new Shop();
  types = [];
  constructor(
    private lookup: ShopLookupsService,
    private shopController: ShopControllerService,
    private router: Router
    ) {
    this.types = this.lookup.getShopTypes().map(el=>({label:el.name, value: el.id}));
   }

  ngOnInit(): void {

  }
  submit(){
    debugger;
    let type = this.types.find(el=>el.value == this.shop.typeId);
    if(!!type) this.shop.type = type.label;
    this.shopController.addShop(this.shop);
    this.navAway = true;
    this.router.navigate(['/shop/list']);

  }
  canDeactivate(){
    if(this.form.dirty && !this.navAway){
      return confirm("You seem to have made some changes.Do you want to discard any information ?.");
    }else{
      return true;
    }
  }
  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      if (control.controls) { // control is a FormGroup
        this.markFormGroupTouched(control);
      } else { // control is a FormControl
        control.markAsTouched();
      }
    });
   }


}
