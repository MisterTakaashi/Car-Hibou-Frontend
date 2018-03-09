import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient } from '@angular/common/http';

import {Itinerary} from '../models/itinerary';

@Injectable()
export class ItineraryService {

  constructor(private _http: HttpClient) { }
  API_URL = "http://10.31.1.192:8080";

  getIntineraire(itinerary: Itinerary) : Observable<Itinerary> {
    return this._http
      .get<Itinerary>(this.API_URL + '/');
  }

  updateIntineraire(itinerary: Itinerary) : Observable<Itinerary> {
    return this._http
      .patch<Itinerary>(this.API_URL + '',{itinerary: Itinerary});
      
  }

  deleteIntineraire(itinerary: Itinerary) : Observable<Itinerary> {
    return this._http
      .delete<Itinerary>(this.API_URL +'');
  }

  createIntineraire(itinerary: Itinerary) : Observable<Itinerary> {
    return this._http
      .post<Itinerary>(this.API_URL + '',{itinerary: Itinerary});
  }
 
}