import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FoodItem } from './fooditem';
import { FOODITEMS1 } from './mock-items';

@Injectable()
export class FoodService {
  foods: any;
  constructor(private http: HttpClient) { }

  getFull() {
    this.foods = this.http.get('/items');
    return this.foods;
  }
  
  getToday() {
    this.foods = this.http.get('/items/today');
	return this.foods;
  }

}
