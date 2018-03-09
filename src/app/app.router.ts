
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ItineraryPageComponent } from './itinerary-page/itinerary-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'map', component: MapPageComponent},
  {path: 'itinerary', component: ItineraryPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'logout', component: LogoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }