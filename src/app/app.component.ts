import { Component } from '@angular/core';

import { PhotonService } from './shared/services/photon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    PhotonService
  ]
})
export class AppComponent {
  title = 'app';
}
