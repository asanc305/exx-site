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
  rices = [];
  beans = [];
  meats = [];
  sides = [];
  others = [];

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
              this.insert(this.rices, data[i]);
              //this.foods[0].push(data[i]);
              break;
            case 'b':
              this.insert(this.beans, data[i]);
              //this.foods[1].push(data[i]);
              break;
            case 'm':
              this.insert(this.meats, data[i]);
              //this.foods[2].push(data[i]);
              break;
            case 's':
              this.insert(this.sides, data[i]);
              //this.foods[3].push(data[i]);
              break;
            case 'o':
              this.insert(this.others, data[i]);
              //this.foods[4].push(data[i]);
              break;
          }
        }
      });
  }
  
  insert(list, item): void {
    var size = list.length;
    var innersize = 0;
    var temp = [];
    
    if (size == 0 || list[size-1].length == 4) {
      temp.push(item);
      list.push(temp);
    }
    else {
      list[size-1].push(item);
    }
  }
  
}


