import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit {

  driver : boolean = true;
  constructor(
    private _routerService: Router
  ) { }

  ngOnInit() {
  }

  public onClick(){
   
  }

}
