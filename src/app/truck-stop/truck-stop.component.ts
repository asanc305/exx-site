import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FoodItem } from '../fooditem';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-truck-stop',
  templateUrl: './truck-stop.component.html',
  styleUrls: ['./truck-stop.component.css']
})
export class TruckStopComponent implements OnInit {

  foods = [ [], [], [], [], [] ];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFull()
      .subscribe(data => {
        for (var i = 0; i < data.length; i++) {
          switch (data[i]['available']) {
            case 'y':
              data[i]['icon'] = "assets/ready.svg";
              data[i]['stat'] = "Ready";
              break;
            case 'n':
              data[i]['icon'] = "assets/plate.svg";
              data[i]['stat'] = "Sold Out";
              break;
            case 'unavailable':
              data[i]['icon'] = "assets/unavailable.svg";
              data[i]['stat'] = "Unavailable";
              break;
            case 'cooking':
              data[i]['icon'] = "assets/cooking.svg";
              data[i]['stat'] = "Cooking";
              break;
          }


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

}
