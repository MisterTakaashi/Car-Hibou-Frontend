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
import { AppNotification } from './shared/models/notification';

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
  // The Notifications of the current User if logged In
  notifications: Array<AppNotification>;
  // The Interval to search for new Notifications
  notificationsInterval: any;
  // The Error if the search for new Notifications has encountered an Error
  error: Error;

  constructor(
    private _localSessionService : LocalSessionService,
    private _notificationService : NotificationService
  ){ }

  // Initialization
  ngOnInit(){
    this.notifications = Array();
    this.notifications.push({ message : "Notif 1", seen : false, redirect : "/login"});
    this.notifications.push({ message : "User Accepted", seen : false, redirect : "/login"});
    this.notifications.push({ message : "Trip created", seen : true, redirect : "/login"});
    this.notifications.push({ message : "Trip Deleted", seen : true, redirect : "/login"});
    // Start the Interval to look for the new Notifications
    this.startInterval();
  }

  // Is the User Connected
  userIsConnected() : Boolean{
    //return true;
    return this._localSessionService.isAuthenticated();
  }

  // Start the infinite search for new notifications
  startInterval(): void{
    clearInterval(this.notificationsInterval);
    this.notificationsInterval = setInterval(this.getNotifications, 5000);
  }

  // Get the Notifications for the Current logged In User
  getNotifications() : void{
    if (this.userIsConnected){
      this._notificationService.GetNotifications(this._localSessionService.getUser()).subscribe(
        (data) => this.notifications = data.result,
        (err) => this.error = err
      );
    } else {
      this.notifications = Array();
    }
  }

  // When a Notification has been Clicked
  notifClicked(notif: AppNotification){
    if (notif.seen != true){
      notif.seen = true;
      this._notificationService.UpdateNotification(notif).subscribe();
    }
  }
}
