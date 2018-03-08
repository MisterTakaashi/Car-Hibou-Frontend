import { Component } from '@angular/core';

import { PhotonService } from './shared/services/photon.service';
import { LocationService } from './shared/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    PhotonService,
    LocationService
  ]
})
export class AppComponent {
  title = 'app';
}
