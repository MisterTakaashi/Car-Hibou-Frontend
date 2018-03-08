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

  public setToken(token: string): void{
    localStorage.setItem(TokenItemId, token);
  }

  public setUser(user: User): void{
    localStorage.setItem(UserItemId, JSON.stringify(user));
  }

  private resetToken(): void{
    localStorage.removeItem(TokenItemId);
  }

  private resetUser(): void{
    localStorage.removeItem(UserItemId);
  }

  public resetCredentials(): void{
    this.resetToken();
    this.resetUser();
  }
}