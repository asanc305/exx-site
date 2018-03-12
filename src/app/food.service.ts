import { Injectable } from '@angular/core';

import { FoodItem } from './fooditem';
import { FOODITEMS1 } from './mock-items';

@Injectable()
export class FoodService {

  constructor() { }

  getFoods(): FoodItem[] {
    return FOODITEMS1;
  }

}
