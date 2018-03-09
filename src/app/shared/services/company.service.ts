import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IpLocation } from '../models/ip-location';
import { Company } from '../models/company';
import { ApiResponse } from '../models/api-response';

@Injectable()
export class CompanyService {

  constructor(
    private _http: HttpClient
  ) { }

  getCompany() : Observable<ApiResponse<Company>> {
    return new Observable<ApiResponse<Company>>(observer => {
      let company: Company = new Company();
      company.name = "Matou Corp.";
      company.location = {lat: 43.613, lng: 1.393};

      let fakeApiResponse = new ApiResponse<Company>();
      fakeApiResponse.result = company;

      observer.next(fakeApiResponse);
      observer.complete();
    });
  }

}
