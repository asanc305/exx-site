import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuTodayComponent } from './menu-today/menu-today.component';
import { MenuFullComponent } from './menu-full/menu-full.component';
import { TruckStopComponent } from './truck-stop/truck-stop.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: "", component: MenuFullComponent },
  { path: 'menuToday', component: MenuTodayComponent },
  { path: 'truckStop', component: TruckStopComponent },
  { path: 'aboutUs', component: AboutUsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes , {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
