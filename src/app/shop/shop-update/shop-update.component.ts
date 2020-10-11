import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ShopControllerService } from 'src/app/services/shop-controller.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Shop } from 'src/app/models/shop.model';
import { restrictedValidator } from 'src/app/validators/restricted-validator.validator';
import { ShopLookupsService } from '../shop-lookups.service';
@Component({
  selector: 'app-shop-update',
  templateUrl: './shop-update.component.html',
  styleUrls: ['./shop-update.component.css'],
})
export class ShopUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  shop: Shop = new Shop();
  types = [];
  constructor(
    private lookup: ShopLookupsService,
    private shopController: ShopControllerService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.types = this.lookup.getShopTypes().map(el=>({label:el.name, value: el.id}));
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, [Validators.required, restrictedValidator]),
      typeId: new FormControl(null, Validators.required),
      contact: new FormControl(null, Validators.required)

    });
    if (!!this.route.snapshot.params['id']) {
      let id = +this.route.snapshot.params['id'];
      this.getShopById(id);
    }
  }
  getShopById(id) {
    console.log(id);
    let shop = this.shopController.getShopById(id);
    this.form.patchValue({
      id:shop.id,
      name:shop.name,
      contact: shop.contact,
      typeId: shop.typeId
    });
  }
  get f() { return this.form.controls; }
  canDeactivate() {
    if (this.form.dirty) {
      return confirm(
        'You seem to have made some changes.Do you want to discard any information ?.'
      );
    } else {
      return true;
    }
  }
  submit(){
    let type = this.types.find(el=>el.value == this.form.value.typeId);
    let updatedData = {...this.form.value}
    if(!!type) updatedData.type = type.label;
    this.shopController.updateShop(updatedData);
    this.router.navigate(['/shop/list']);
  }

}
