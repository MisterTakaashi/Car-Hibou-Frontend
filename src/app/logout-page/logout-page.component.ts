import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalSessionService } from '../shared/services/local-session.service';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss']
})
export class LogoutPageComponent implements OnInit {

  private _interval : NodeJS.Timer;

  constructor(
    private _localSessionService: LocalSessionService,
    private _loginService: LoginService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._loginService.LogOut(this._localSessionService.getToken());
    this._localSessionService.resetCredentials();
    this._interval = setInterval(() => {this.redirect()}, 10000);
  }

  ngOnDestroy(): void {
    if (this._interval != null && this._interval != undefined){
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  redirect() :void {
    clearInterval(this._interval);
    this._interval = null;
    this._router.navigate(["/"]);
  }
}
