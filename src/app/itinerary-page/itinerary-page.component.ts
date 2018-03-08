import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocationService } from '../shared/services/location.service';
import { PhotonGeo } from '../shared/models/photon-geo';
import { PhotonService } from '../shared/services/photon.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-itinerary-page',
  templateUrl: './itinerary-page.component.html',
  styleUrls: ['./itinerary-page.component.scss']
})
export class ItineraryPageComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateMapHeight();
  }

  mapCoords: any = {lat: 43.62, lng: 1.43};

  departureAdress: string;
  departureSelected: any = {};

  innerHeight: number;

  placeSearchSource: Observable<PhotonGeo>;

  constructor(
    private _route: ActivatedRoute,
    private _photonService: PhotonService,
    private _locationService: LocationService
  ) { }

  ngOnInit() {
    this.calculateMapHeight();

    this._locationService.getApproximativeLocation().subscribe(data => {
      this.mapCoords = {lat: data.lat, lng: data.lon};
    });

    this.placeSearchSource = Observable.create((observer: any) => {
      // Runs on every search
      this._photonService.search(this.departureAdress).subscribe(data => {
        let searchArray = data.features;
        searchArray.map(x => x.properties.formattedName = `${x.properties.name}, ${x.properties.city}, ${x.properties.country}`);
        observer.next(searchArray);
      });
    });
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.departureSelected.lng = e.item.geometry.coordinates[0];
    this.departureSelected.lat = e.item.geometry.coordinates[1];

    this.mapCoords = {lat: this.departureSelected.lat, lng: this.departureSelected.lng};
  }

  mapOnClick(event: any) {
    // this.circleCoords = event.coords;
  }

  private calculateMapHeight() {
    this.innerHeight = document.documentElement.clientHeight - 72;
  }

}
