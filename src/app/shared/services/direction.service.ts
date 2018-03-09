import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { GoogleMapsAPIWrapper } from '@agm/core';

declare var google: any;
@Injectable()
export class DirectionService {

  directionsService: any;

  constructor(private _gmapsApiWrapper: GoogleMapsAPIWrapper) { }

  getDirectionSteps(map: any): Observable<any> {
    return new Observable<any>(observer => {
      this.directionsService = new google.maps.DirectionsService;

      this.directionsService.route({
        origin: {lng: 1.36, lat: 43.6813796},
        destination: {lng: 1.393, lat: 43.613},
        travelMode: 'DRIVING'
      }, (response: any, status: any) => {
        if (status === 'OK') {
          observer.next(response);
          observer.complete();
        }else {
          observer.error(response);
          observer.complete();
        }
      });
    });
  }
 
}