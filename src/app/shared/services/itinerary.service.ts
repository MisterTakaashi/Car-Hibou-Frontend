import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient } from '@angular/common/http';

import {Itinerary} from '../models/itinerary';
import { SharedModule } from '../shared.module';
import { ApiResponse } from '../models/api-response';

@Injectable()
export class ItineraryService {

  constructor(private _http: HttpClient) { }

  getItinerary(itinerary: Itinerary) : Observable<ApiResponse<Itinerary>> {
    return this._http
      .get<ApiResponse<Itinerary>>(SharedModule.API_URL + '/itineraries');
  }

  updateItinerary(itinerary: Itinerary) : Observable<ApiResponse<Itinerary>> {
    return this._http
      .patch<ApiResponse<Itinerary>>(SharedModule.API_URL + '/itineraries',{itinerary: Itinerary});
      
  }

  deleteItinerary(itinerary: Itinerary) : Observable<ApiResponse<Itinerary>> {
    return this._http
      .delete<ApiResponse<Itinerary>>(SharedModule.API_URL +'/itineraries');
  }

  createItinerary(itinerary: Itinerary) : Observable<ApiResponse<Itinerary>> {
    return this._http
      .post<ApiResponse<Itinerary>>(SharedModule.API_URL + '/itineraries',{itinerary: Itinerary});
  }

  searchItineraries(location: {lat: number, lng: number}, radius: number) : Observable<ApiResponse<Itinerary[]>> {
    return this._http
      .get<ApiResponse<Itinerary[]>>(SharedModule.API_URL + '/itineraries/search?lat=' + location.lat + '&lng=' + location.lng + "&radius=" + radius);
  }
 
}