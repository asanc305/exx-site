import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FoodItem } from './fooditem';

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

  updateFood(item) {
    return this.http.put('/items/'+item._id, item);
  }

  addFood(item) {
    return this.http.post('/items/', item);
  }

}
