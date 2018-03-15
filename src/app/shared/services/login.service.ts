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
    return this._http.get<ApiResponse<UserSession>>(`${SharedModule.API_URL}/users/register?username=${username}&email=${mail}&password=${password}&passwordConfirm=${password2}`);
  }

   public LogIn(username: string, password: string) : Observable<ApiResponse<UserSession>> {
      let user: User = { username: username, password: password };
      return this._http.get<ApiResponse<UserSession>>(`${SharedModule.API_URL}/users/auth?username=${username}&password=${password}`);
   }
   
   public LogOut(token: String): Observable<ApiResponse<boolean>>{
       return this._http.post<ApiResponse<boolean>>("URL", token);
   }
}
