import { Component, OnInit } from '@angular/core';
import { LocalSessionService } from '../shared/services/local-session.service';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public login: string = "";
  public password: string = "";
  public password2: string = "";
  public mail: string = "";
  public errorMessage = false;

  constructor(
    private _localSessionService: LocalSessionService,
    private _loginService: LoginService,
    private _routerService: Router
  ) { }

  ngOnInit() {
  }

  public onClick(){
    if (this.registrationIsOk())
    {
      this._loginService.Register(this.login, this.password, this.password2, this.mail).subscribe(response => {
            if (response != null){
              this._localSessionService.setUser(response);
              this._localSessionService.setToken(response.token);
              this._routerService.navigate(['/']);
            }
          });
    } else {
        this.errorMessage = true;
    }
  }

  public registrationIsOk(){
    // TODO Test for values
    return true;
  }
}
