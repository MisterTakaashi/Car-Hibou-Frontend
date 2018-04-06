import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { PhotonService } from './services/photon.service';
import { LocationService } from './services/location.service';
import { PlaceSearchPipe } from './pipes/place-search.pipe';
import { ItineraryService } from './services/itinerary.service';
import { LocalSessionService } from './services/local-session.service';
import { TokenInterceptor } from './interceptors/httpInterceptor';
import { DirectionsMapDirective } from './directives/agm-directive.directive';
import { DirectionService } from './services/direction.service';
import { CompanyService } from './services/company.service';

const MODULES = [
  // NE PAS INCLURE UniversalModule, HttpModule, ou JsonpModule ici
  CommonModule
];

const PIPES = [
  PlaceSearchPipe
];

const COMPONENTS = [
  // Inclure les components
];

const PROVIDERS = [
  // Inclure le sproviders
]

const DIRECTIVES = [
  // DirectionsMapDirective
]

const SERVICES = [
  PhotonService,
  LocationService,
  LocalSessionService,
  ItineraryService,
  CompanyService,
  DirectionService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ],
  providers: [],
})
export class SharedModule {

  static API_URL = "http://10.31.3.93:8080";

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS,
        ...SERVICES
      ]
    };
  }
}