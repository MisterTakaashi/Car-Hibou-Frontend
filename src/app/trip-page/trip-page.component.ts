import { Component, OnInit } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { LocalSessionService } from '../shared/services/local-session.service';

import { Router, ActivatedRoute } from '@angular/router';
import { ItineraryService } from '../shared/services/itinerary.service';
import { Itinerary } from '../shared/models/itinerary';
import { CommentariesService } from '../shared/services/commentaries.service';
import { Commentary } from '../shared/models/commentary';


@Component({
    selector: 'app-trip-page',
    templateUrl: './trip-page.component.html',
    styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit {

    tripId: number;
    trip: Itinerary;
    driver: boolean = false;
    conected: boolean = true;
    comm = "";
    comments: Commentary[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _localSessionService: LocalSessionService,
        private _itineraryService: ItineraryService,
        private _commentariesService: CommentariesService
    ) { }

    ngOnInit() {
        //this.conected = this._localSessionService.isAuthenticated();
        this.tripId = this._route.snapshot.params.id;
        this._itineraryService.getItinerary(this.tripId).subscribe(data => {
            this.trip = data.result;
        });

        this._commentariesService.getForItinerary(this.tripId).subscribe(data => {
            this.comments = data.result;
        });
    }

    public onClick() {

    }



    confirm(): void {
        this._commentariesService.save(this.comm, this.tripId).subscribe(data => {
            console.log("Commnt inserted:", data);
            this.comments.push(data.result);
        });
    }

    decline(): void {

        this.comm = "";
    }

}
