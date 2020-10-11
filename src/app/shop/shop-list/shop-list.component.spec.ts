import { ShopModule } from './../shop.module';
import { ShopControllerService } from 'src/app/services/shop-controller.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListComponent } from './shop-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { TableModule } from 'primeng/table';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
describe('ShopListComponent', () => {
  let component: ShopListComponent;
  let fixture: ComponentFixture<ShopListComponent>;
  let shopControllerService: any;
  let el: DebugElement;
  beforeEach(async(() => {
    shopControllerService = jasmine.createSpyObj("ShopControllerService",["getShops"])
    TestBed.configureTestingModule({
      imports:[TableModule,NoopAnimationsModule],
      declarations: [ ShopListComponent ],
      providers:[{provide:ShopControllerService,useValue:shopControllerService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListComponent);
    component = fixture.componentInstance;
    shopControllerService = TestBed.get(ShopControllerService);
    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it('should create', () => {
    //pending();
    expect(component).toBeTruthy();
  });
  it('should check if shops are displayed', () => {
    shopControllerService.getShops.and.returnValue(
     of( [
        {"id":1,"name":"Bikaner Sweets Co.","type":"savory","typeId":1, "contact":"+12133734253"},
        {"id":2,"name":"Purohit & Sons","type":"sweets","typeId":2,"contact":"+12133734222"}

      ]
     )
    );
    fixture.detectChanges();
    console.log(el.nativeElement.innerHTML);
    let rows = el.queryAll(By.css(".m-1"));
    console.log(el.queryAll(By.css(".row-xd")))
    expect(rows.length).toEqual(2, "More Tabs were found");
    //pending();
  });
});
