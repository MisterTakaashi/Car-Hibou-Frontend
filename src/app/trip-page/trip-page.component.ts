import { Component, OnInit } from '@angular/core';

import {  ModalDirective } from 'ngx-bootstrap/modal';

import { LocalSessionService } from '../shared/services/local-session.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit {

  driver : boolean = false;
  conected : boolean = true;
  modalRef: ModalDirective;
  constructor(
    private _localSessionService: LocalSessionService,
    private _routerService: Router
  ) { }

  ngOnInit() {
   //this.conected = this._localSessionService.isAuthenticated();
  }

  public onClick(){
   
  }



    confirm(): void {
    
    this.modalRef.hide();
  }
 
  decline(): void {
    
    this.modalRef.hide();
  }

}
