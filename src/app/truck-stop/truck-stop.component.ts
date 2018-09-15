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
  selectedItems = [];
  isActive = false;
  item = new FoodItem();

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }

  onSelect(item: FoodItem): void {
    //this.isActive = !this.isActive;
    item.isSelected = !item.isSelected;
    var index = this.selectedItems.indexOf(item);

    if (index == -1) {
      this.selectedItems.push(item);
    }
    else {
      this.selectedItems.splice(index,1);
    }

    console.log(item.isSelected);
  }

  markReady() {
    console.log("mark ready clicked");

    var length = this.selectedItems.length;

    for (var i =0; i< length; i++){
      var item = this.selectedItems[i];
      item['available'] = 'y';

      this.foodService.updateFood(item)
        .subscribe(() => this.getFoods());
    }
    this.selectedItems = [];
  }

  markSold() {
    console.log("mark sold clicked");

    var length = this.selectedItems.length;

    for (var i =0; i< length; i++){
      var item = this.selectedItems[i];
      item['available'] = 'n';

      this.foodService.updateFood(item)
        .subscribe(() => this.getFoods());
    }
    this.selectedItems = [];
  }

  clearAll() {
    console.log("clear all clicked")

    for (var i = 0; i<=4; i++){
      console.log("this is i " + i);
      var length = this.foods[i].length;
      console.log("this is length " + length)

      for (var j=0; j< length; j++) {
        console.log("this is j " + j);
        var item = this.foods[i][j];
        console.log(item);
        item.available = 'n';
        this.foodService.updateFood(item)
          .subscribe(() => this.getFoods());
      }

    }
  }

  save() {
    //console.log(newItemForm.value.name);
  }

  newItem(item: FoodItem): void{
    item.available = "n";
    this.foodService.addFood(item)
      .subscribe(() => console.log("done"));

    //this.item = new FoodItem();
    console.log(item);
  }


  getFoods(): void {
    this.foodService.getFull()
      .subscribe(data => {
        var food = [ [], [], [], [], [] ]
        for (var i = 0; i < data.length; i++) {
          data[i]['isSelected'] = false;
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
              food[0].push(data[i]);
              break;
            case 'b':
              food[1].push(data[i]);
              break;
            case 'm':
              food[2].push(data[i]);
              break;
            case 's':
              food[3].push(data[i]);
              break;
            case 'o':
              food[4].push(data[i]);
              break;
          }
          this.foods = food;
        }
      });
  }

}
