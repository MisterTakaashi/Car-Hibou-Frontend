import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/services/location.service';
import { IpLocation } from '../shared/models/ip-location';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nearby-users',
  templateUrl: './nearby-users.component.html',
  styleUrls: ['./nearby-users.component.scss']
})
export class NearbyUsersComponent implements OnInit {
  public nearbyUsers: number = 174;


  constructor(private _locationService : LocationService) { }

  ngOnInit() {
    let location: Observable<IpLocation> = this._locationService.getApproximativeLocation();
    //this.nearbyUsers = TODO
  }

}
