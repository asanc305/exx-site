import { Component, OnInit } from '@angular/core';

import { FoodItem } from '../fooditem';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu-full',
  templateUrl: './menu-full.component.html',
  styleUrls: ['./menu-full.component.css']
})
export class MenuFullComponent implements OnInit {
 
  foods: FoodItem[];
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.foods = this.foodService.getFoods();
  }

  filterFoods(type) {
    return this.foods.filter(food=> food.type == type );
  }

}
