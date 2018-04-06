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
   
  // Get all notifications for given user
   public GetNotifications(): Observable<ApiResponse<Array<AppNotification>>> {
       return this._http.get<ApiResponse<Array<AppNotification>>>(`${SharedModule.API_URL}/notifications`);
   }

   // Updates the given Notification
   public UpdateNotification (notification: AppNotification): Observable<ApiResponse<AppNotification>> {
       return this._http.post<ApiResponse<AppNotification>>(`${SharedModule.API_URL}/notifications/`, notification);
   }

   // Delete the given Notification
   public DeleteNotification (notification: AppNotification): Observable<ApiResponse<Boolean>> {
       return this._http.delete<ApiResponse<Boolean>>(`${SharedModule.API_URL}/notifications/`  + notification.id);
   }

   // Create a new Notification
   public CreateNotification(notification: AppNotification): Observable<ApiResponse<AppNotification>> {
       return this._http.post<ApiResponse<AppNotification>>(`${SharedModule.API_URL}/notifications/`, notification);
   }
}