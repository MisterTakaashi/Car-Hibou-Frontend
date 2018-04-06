import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User, UserSession } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from '../shared.module';
import { ApiResponse } from '../models/api-response';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) { }

  public Register(username: string, password : string, password2 : string, mail : string): Observable<ApiResponse<UserSession>> {
    // TODO: Corrige rune fois l'API passée en post
    // let user: User = { username: username, password: password, password2: password2, mail: mail };
    // return this._http.post<User>("URL", user);
    let user = {
        username: username,
        password: password,
        confirmPassword: password2,
        email: mail
    };

    return this._http.post<ApiResponse<UserSession>>(`${SharedModule.API_URL}/users`, user);
  }

   public LogIn(username: string, password: string) : Observable<ApiResponse<UserSession>> {
      let user: User = { username: username, password: password };
      return this._http.post<ApiResponse<UserSession>>(`${SharedModule.API_URL}/session`, user);
   }
   
   public LogOut(token: String): Observable<ApiResponse<boolean>> {
       return this._http.delete<ApiResponse<boolean>>(`${SharedModule.API_URL}/session`, {});
   }
}
