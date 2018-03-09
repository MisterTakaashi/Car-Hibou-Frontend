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

  getCompany() : Observable<Company> {
    return new Observable<Company>(observer => {
      let company: Company = new Company();
      company.name = "Matou Corp.";
      company.location = {lat: 43.613, lng: 1.393};

      observer.next(company);
    });
    // return this._http.get<IpLocation>('http://ip-api.com/json');
  }

}
