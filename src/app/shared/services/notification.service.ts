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
       return this._http.get<ApiResponse<Array<AppNotification>>>(`${SharedModule.API_URL}/notifications/` + user.id);
   }

   public UpdateNotification (notification: AppNotification): Observable<ApiResponse<AppNotification>> {
       return this._http.post<ApiResponse<AppNotification>>(`${SharedModule.API_URL}/notifications/`, notification);
   }

   public DeleteNotification (notification: AppNotification): Observable<ApiResponse<Boolean>> {
       return this._http.delete<ApiResponse<Boolean>>(`${SharedModule.API_URL}/notifications/`  + notification.id);
   }

   public CreateNotification(notification: AppNotification): Observable<ApiResponse<AppNotification>> {
       return this._http.post<ApiResponse<AppNotification>>(`${SharedModule.API_URL}/notifications/`, notification);
   }
}