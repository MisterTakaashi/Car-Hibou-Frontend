import { Component, OnInit } from '@angular/core';

import {  ModalDirective } from 'ngx-bootstrap/modal';

import { LocalSessionService } from '../shared/services/local-session.service';

import { Router, ActivatedRoute } from '@angular/router';
import { ItineraryService } from '../shared/services/itinerary.service';
import { Itinerary } from '../shared/models/itinerary';


@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit {

    tripId : number; 
    trip: Itinerary;
  driver : boolean = false;
  conected : boolean = true;
  comm = "";
 
  constructor(
    private _route: ActivatedRoute,
    private _localSessionService: LocalSessionService,
    private _itineraryService: ItineraryService
  ) { }

  ngOnInit() {
   //this.conected = this._localSessionService.isAuthenticated();
   this.tripId = this._route.snapshot.params.id;
   this._itineraryService.getItinerary(this.tripId).subscribe(data => {
       this.trip = data.result;
   });
  }

  public onClick(){
   
  }



  confirm(): void {
    
    console.log(this.comm);
    
  }
 
  decline(): void {
    
    this.comm = "";
  }

}
