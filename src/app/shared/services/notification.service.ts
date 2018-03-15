import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User, UserSession } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from '../shared.module';
import { ApiResponse } from '../models/api-response';

@Injectable()
export class NotificationService {

  constructor(private _http: HttpClient) { }
   
   public GetNotifications(user : User): Observable<ApiResponse<Array<Notification>>> {
       return this._http.post<ApiResponse<Array<Notification>>>(`${SharedModule.API_URL}/notifications/getForUser/`, user);
   }
}