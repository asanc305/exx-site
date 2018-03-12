import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [ FoodService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
