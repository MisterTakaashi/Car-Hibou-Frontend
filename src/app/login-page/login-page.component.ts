import { Component, OnInit } from '@angular/core';
import { LocalSessionService } from '../shared/services/local-session.service';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public login: string = "";
  public password: string = "";
  public errorMessage=false;

  constructor(
    private _localSessionService: LocalSessionService,
    private _loginService: LoginService,
    private _routerService: Router
  ) { }

  ngOnInit() {
  }

  public onClick(){
    if (this.registrationIsOk()){
      this._loginService.LogIn(this.login, this.password).subscribe(response => {
        if (response != null){
          this._localSessionService.setUser(response.result.user);
          this._localSessionService.setToken(response.result.token);
        }
        console.log(response);
        this._routerService.navigate(['/']);
      });
    } else {
      this.errorMessage=true;
    }
  }

  public registrationIsOk(){
    // TODO Test for values
    return true;
  }
}
