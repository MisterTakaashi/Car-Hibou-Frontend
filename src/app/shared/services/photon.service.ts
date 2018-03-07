import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { PhotonGeo } from '../models/photon-geo';

@Injectable()
export class PhotonService {

  constructor(
    private _http: HttpClient
  ) { }

  search(query: string) : Observable<PhotonGeo> {
    // return this._http.get<PhotonGeo>('http://photon.komoot.de/api/?q=' + query + '&lang=fr');
    return this._http.get<PhotonGeo>('http://photon.komoot.de/api/?q=' + query + '&lang=fr');
  }

}
