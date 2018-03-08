import { Component, OnInit } from '@angular/core';
import { LocalSessionService } from '../shared/services/local-session.service';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public login: string = "";
  public password: string = "";

  constructor(
    private _localSessionService: LocalSessionService,
    private _loginService: LoginService
  ) { }

  ngOnInit() {
  }

  public onClick(){
    this._loginService.LogIn(this.login, this.password).subscribe(response => {
      if (response != null){
        this._localSessionService.setUser(response);
        this._localSessionService.setToken(response.token);
      }
    });
  }
}
