import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuTodayComponent } from './menu-today/menu-today.component';
import { MenuFullComponent } from './menu-full/menu-full.component';
import { FoodService } from './food.service';
import { AuthService } from './auth.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import { TruckStopComponent } from './truck-stop/truck-stop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuTodayComponent,
    MenuFullComponent,
    SidenavComponent,
    TruckStopComponent,
    AboutUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
	  MatCardModule,
	  MatListModule,
    MatDividerModule,
    FormsModule
  ],
  providers: [ FoodService, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
