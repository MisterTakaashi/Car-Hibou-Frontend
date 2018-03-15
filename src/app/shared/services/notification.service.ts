import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User, UserSession } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from '../shared.module';
import { ApiResponse } from '../models/api-response';
import { AppNotification } from '../models/notification';

@Injectable()
export class NotificationService {

  constructor(private _http: HttpClient) { }
   
   public GetNotifications(user : User): Observable<ApiResponse<Array<AppNotification>>> {
       return this._http.post<ApiResponse<Array<AppNotification>>>(`${SharedModule.API_URL}/notifications/getForUser/`, user);
   }
}