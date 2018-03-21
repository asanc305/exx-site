import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { MenuTodayComponent } from './menu-today/menu-today.component';
import { MenuFullComponent } from './menu-full/menu-full.component';
import { FoodService } from './food.service'


@NgModule({
  declarations: [
    AppComponent,
    MenuTodayComponent,
    MenuFullComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [ FoodService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
