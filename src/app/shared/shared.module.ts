import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotonService } from './services/photon.service';
import { PlaceSearchPipe } from './pipes/place-search.pipe';
import { ItineraryService } from './services/itinerary.service';

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

const SERVICES = [
  PhotonService,
  ItineraryService
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ],
  providers: [],
})
export class SharedModule {

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