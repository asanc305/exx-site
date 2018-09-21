import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FoodItem } from './fooditem';
import { AuthService } from './auth.service';

@Injectable()
export class FoodService {
  foods: any;
  private token: string;

  constructor(private http: HttpClient, private auth: AuthService) { }

  getFull() {
    this.foods = this.http.get('/items');
    return this.foods;
  }

  getToday() {
    this.foods =  this.http.get('/items/today');
	  return this.foods;
  }

  updateFood(item) {
    return this.http.put('/items/'+item._id, item, { headers: { Authorization: `Bearer ${this.getToken()}` }} );
  }

  addFood(item) {
    return this.http.post('/items/', item, { headers: { Authorization: `Bearer ${this.getToken()}` }});
  }

  deleteFood(item) {
    return this.http.delete('/items/'+item._id, { headers: { Authorization: `Bearer ${this.getToken()}` }});
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

}
