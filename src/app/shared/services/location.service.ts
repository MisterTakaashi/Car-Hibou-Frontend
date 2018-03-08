import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IpLocation } from '../models/ip-location';

@Injectable()
export class LocationService {

  constructor(
    private _http: HttpClient
  ) { }

  getApproximativeLocation() : Observable<IpLocation> {
    return this._http.get<IpLocation>('http://ip-api.com/json');
  }

}
