import { Component, OnInit } from '@angular/core';

import { PhotonService } from './shared/services/photon.service';
import { LocationService } from './shared/services/location.service';
import { ItineraryService } from './shared/services/itinerary.service';
import { LocalSessionService } from './shared/services/local-session.service';
import { DirectionService } from './shared/services/direction.service';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { LoginService } from './shared/services/login.service';
import { CompanyService } from './shared/services/company.service';
import { NotificationService } from './shared/services/notification.service';

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
    CompanyService,
    GoogleMapsAPIWrapper,
    LoginService,
    NotificationService
  ]
})
export class AppComponent {
  title = 'app';
  notifications: Array<Notification>;
  notificationsInterval: any;
  error: Error;

  constructor(
    private _localSessionService : LocalSessionService,
    private _notificationService : NotificationService
  ){

  }

  ngOnInit(){
    this.notificationsInterval = setInterval(this.getNotifications, 5000);
  }

  userIsConnected(){
    return true;
    //return this._localSessionService.isAuthenticated();
  }

  getNotifications(){
    if (this.userIsConnected){
      this._notificationService.GetNotifications(this._localSessionService.getUser()).subscribe(
        (data) => this.notifications = data.result,
        (err) => this.error = err
      );
    }
  }
}
