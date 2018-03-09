import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IpLocation } from '../models/ip-location';
import { Company } from '../models/company';

@Injectable()
export class CompanyService {

  constructor(
    private _http: HttpClient
  ) { }

  // getCompanyLocation() : Observable<Company> {
  //   new Observable<Company>(observer => {
  //     observer.next();
  //   });
  //   // return this._http.get<IpLocation>('http://ip-api.com/json');
  // }

}
