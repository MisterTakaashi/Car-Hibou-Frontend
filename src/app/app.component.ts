import { Component } from '@angular/core';

import { PhotonService } from './shared/services/photon.service';
import { LocationService } from './shared/services/location.service';
import { ItineraryService } from './shared/services/itinerary.service';
import { LocalSessionService } from './shared/services/local-session.service';
import { DirectionService } from './shared/services/direction.service';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    PhotonService,
    LocationService,
    ItineraryService,
    DirectionService,
    LocalSessionService,
    GoogleMapsAPIWrapper,
    LoginService
  ]
})
export class AppComponent {
  title = 'app';
}
