import { Injectable } from '@angular/core';
import { User } from '../models/User';

const UserItemId: string = 'user';
const TokenItemId: string = 'token';

@Injectable()
export class LocalSessionService {
  constructor() { }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    if (token != undefined)
      return true;
    else
      return false;
  }

  public getToken(): string {
    return localStorage.getItem(TokenItemId);
  }

  public getUser(): User {
    return JSON.parse(localStorage.getItem(UserItemId));
  }

  public setToken(token: string){
    localStorage.setItem(TokenItemId, token);
  }

  public setUser(user: User){
    localStorage.setItem(UserItemId, JSON.stringify(user));
  }

  public resetToken(){
    localStorage.removeItem(TokenItemId);
  }

  public resetUser(){
    localStorage.removeItem(UserItemId);
  }

  public resetCredentials(){
    this.resetToken();
    this.resetUser();
  }
}