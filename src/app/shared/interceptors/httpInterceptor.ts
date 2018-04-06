import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHeaders,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalSessionService } from '../services/local-session.service';
import { SharedModule } from '../shared.module';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _localSessionService: LocalSessionService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes(SharedModule.API_URL)) {
      return next.handle(request);
    }

    console.log("Salut !");

    const c = request.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'testtoken'
        })
      });

    // if (this._localSessionService.getToken() != undefined && this._localSessionService.getToken() != null && this._localSessionService.getToken() != ""){
    //     request = request.clone({
    //       setHeaders: {
    //         Authorization: `testtoken`
    //       }
    //     });
    // }

    return next.handle(c);
  }
}