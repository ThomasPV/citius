import { ShopType } from './../models/shop-type.model';
import * as data from 'src/app/constants/data.json';
export class ShopLookupsService {
  types: {shopTypes: Array<ShopType>} = {shopTypes:[]};
  constructor() {
    this.types = data.default;
  }
  getShopTypes(){
    return this.types.shopTypes.slice();
  }
}
