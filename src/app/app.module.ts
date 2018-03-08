import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';

import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ItineraryPageComponent } from './itinerary-page/itinerary-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapPageComponent,
    ItineraryPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4ZCCcLwrQdGQPsNDW-uu5Gt3HP9L297g'
    }),
    AgmDirectionModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
