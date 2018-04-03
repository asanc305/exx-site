import { Component, OnInit } from '@angular/core';

import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu-today',
  templateUrl: './menu-today.component.html',
  styleUrls: ['./menu-today.component.css']
})
export class MenuTodayComponent implements OnInit {

  foodsInit: any;
  foods = [ [], [], [], [], [] ];
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getToday();
  }
  
  getToday(): void {
    this.foodService.getToday()
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

}


