import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';




import { AppComponent } from './app.component';
import { MenuTodayComponent } from './menu-today/menu-today.component';
import { MenuFullComponent } from './menu-full/menu-full.component';
import { FoodService } from './food.service';
import { SidenavComponent } from './sidenav/sidenav.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuTodayComponent,
    MenuFullComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ FoodService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
