import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalSessionService } from '../services/local-session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _localSessionService: LocalSessionService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._localSessionService.getToken() != undefined && this._localSessionService.getToken() != null && this._localSessionService.getToken() != ""){
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this._localSessionService.getToken()}`
          }
        });
    }
    return next.handle(request);
  }
}