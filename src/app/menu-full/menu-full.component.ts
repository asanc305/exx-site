import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { FoodItem } from '../fooditem';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu-full',
  templateUrl: './menu-full.component.html',
  styleUrls: ['./menu-full.component.css']
})
export class MenuFullComponent implements OnInit {
 
  foodsInit: any;
  foods = [ [], [], [], [], [] ];
  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFull()
      .subscribe(data => {
        for (var i = 0; i < data.length; i++) {
          switch (data[i]['type']) {
            case 'r':
              this.foods[0].push(data[i]);
              break;
            case 'b':
              this.foods[1].push(data[i]);
              break;
            case 'm':
              this.foods[2].push(data[i]);
              break;
            case 's':
              this.foods[3].push(data[i]);
              break;
            case 'o':
              this.foods[4].push(data[i]);
              break;
          }
        }
      });
  }
  
  navigate() {
        this.router.navigate(["menuToday"]);
    }

}


