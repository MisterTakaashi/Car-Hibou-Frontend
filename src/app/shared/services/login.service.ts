import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) { }

  public Register(username: string, password : string, password2 : string, mail : string): Observable<User> {
     let user: User = { username: username, password: password, password2: password2, mail: mail };
     return this._http.post<User>("URL", user);
  }

   public LogIn(username: string, password : string) : Observable<User> {
      let user : User = { username: username, password: password };
      return this._http.post<User>("URL", user);
   }

   public LogOut(token: String): Observable<boolean>{
       return this._http.post<boolean>("URL", token);
   }
}
