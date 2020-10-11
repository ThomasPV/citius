import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TestBed, getTestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ShopControllerService } from './shop-controller.service';

describe('ShopControllerService', () => {
  let service: ShopControllerService,
  httpTestingController:HttpTestingController;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        ShopControllerService
      ]
    });

    service = TestBed.get(ShopControllerService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should fetch Shop Data', () => {
    const shops = [
      {"id":1,"name":"Bikaner Sweets Co.","type":"savory","typeId":1, "contact":"+12133734253"},
      {"id":2,"name":"Purohit & Sons","type":"sweets","typeId":2,"contact":"+12133734222"}
    ]
    service.getShops().subscribe(data=>{

      expect(data).toEqual(shops);
    });
     let req = httpTestingController.expectOne(`${environment.url}/assets/data/shops.json`);
     expect(req.request.method).toEqual("GET");
     req.flush({shops});
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(()=>{
    httpTestingController.verify();
  })
});
