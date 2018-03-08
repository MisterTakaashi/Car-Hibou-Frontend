import { Component } from '@angular/core';

import { PhotonService } from './shared/services/photon.service';
import { ItineraryService } from './shared/services/itinerary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    PhotonService,
    ItineraryService
  ]
})
export class AppComponent {
  title = 'app';
}
