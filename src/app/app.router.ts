
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ItineraryPageComponent } from './itinerary-page/itinerary-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'map', component: MapPageComponent},
  {path: 'itinerary', component: ItineraryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }