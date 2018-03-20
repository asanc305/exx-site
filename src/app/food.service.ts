import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FoodItem } from './fooditem';
import { FOODITEMS1 } from './mock-items';

@Injectable()
export class FoodService {
  foodss: any;
  constructor(private http: HttpClient) { }

  getFoods() {
    this.foodss = this.http.get('/book'); 
    //console.log(this.foodss); 
    return this.foodss;
  }

}
