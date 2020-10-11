import { CitiusValidatorModule } from './../validators/citius-validator.module';
import { ShopLookupsService } from './shop-lookups.service';
import { ShopFormGuard } from './../guards/shop-form.guard';
import { CitiusPipesModule } from './../pipes/pipes.module';
import { CitiusDirectivesModule } from '../directives/citius-directives.module';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopUpdateComponent } from './shop-update/shop-update.component';
import { ShopAddComponent } from './shop-add/shop-add.component';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';

import {InputTextModule} from 'primeng/inputtext';
const routes:Routes = [
  {path:'list',component:ShopListComponent},
  {path:'add',component:ShopAddComponent, canDeactivate:[ShopFormGuard]},
  {path:'update/:id',component:ShopUpdateComponent}
];

@NgModule({
  declarations: [ShopListComponent, ShopUpdateComponent, ShopAddComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild(routes),
    ButtonModule,
    RippleModule,
    FormsModule,
    CitiusDirectivesModule,
    FormsModule,
    CitiusPipesModule,
    DropdownModule,
    ReactiveFormsModule,
    CitiusValidatorModule,
    InputTextModule
  ],
  providers:[ShopLookupsService]
})
export class ShopModule { }
