import { Component, OnInit, HostListener, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocationService } from '../shared/services/location.service';
import { PhotonGeo } from '../shared/models/photon-geo';
import { PhotonService } from '../shared/services/photon.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { DirectionService } from '../shared/services/direction.service';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { CompanyService } from '../shared/services/company.service';
import { Company } from '../shared/models/company';
import { Itinerary } from '../shared/models/itinerary';
import { ItineraryService } from '../shared/services/itinerary.service';

@Component({
  selector: 'app-itinerary-page',
  templateUrl: './itinerary-page.component.html',
  styleUrls: ['./itinerary-page.component.scss']
})
export class ItineraryPageComponent implements OnInit, AfterViewInit {

  @ViewChild('AgmMap') agmMap;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateMapHeight();
  }

  mapCoords: any = {lat: 43.62, lng: 1.43};

  departureAdress: string;
  departureSelected: any = {};

  innerHeight: number;

  placeSearchSource: Observable<PhotonGeo>;

  company: Company;

  itineraryValidated: boolean = false;
  loading: boolean = false;

  map: any;

  constructor(
    private _route: ActivatedRoute,
    private _photonService: PhotonService,
    private _locationService: LocationService,
    private _directionService: DirectionService,
    private _companyService: CompanyService,
    private _itineraryService: ItineraryService,
    private _gmapsApiWrapper: GoogleMapsAPIWrapper
  ) { }

  ngOnInit() {
    this.calculateMapHeight();

    this._companyService.getCompany().subscribe(response => {
      this.company = response.result;
    });

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

  ngAfterViewInit() {
    this.agmMap.mapReady.subscribe(map => {
      this.map = map;
    });
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.departureSelected.lng = e.item.geometry.coordinates[0];
    this.departureSelected.lat = e.item.geometry.coordinates[1];

    this.itineraryValidated = false;

    this.mapCoords = {lat: this.departureSelected.lat, lng: this.departureSelected.lng};
  }

  mapOnClick(event: any) {
    this.mapCoords = {lat: event.coords.lat, lng: event.coords.lng};
    this.departureSelected = {lat: event.coords.lat, lng: event.coords.lng};

    this.departureAdress = `${event.coords.lat}, ${event.coords.lng}`;
  }

  seeItinerary() {
    if (!this.departureSelected.lat || !this.departureSelected.lng)
      return;

    this.itineraryValidated = true;
  }

  validateItinerary() {
    this.loading = true;
    this._directionService.getDirectionSteps(this.map).subscribe(direction => {
      console.log(direction);
      console.log(direction.routes[0].overview_path[0]);
      console.log(direction.routes[0].overview_path[0].lat());
      console.log(direction.routes[0].overview_path[0].lng());
      let itinerary = new Itinerary();
      itinerary.arrival = this.company.location;
      itinerary.start = this.departureSelected;
      itinerary.path = direction.routes[0].overview_path.map(x => { return {lat: x.lat(), lng: x.lng()} });

      console.log("Transfert terminé");
      console.log(itinerary);

      this._itineraryService.createItinerary(itinerary).subscribe(response => {
        // TODO: Donner la liste des utilisateurs correspondants
      });
    });
  }

  private calculateMapHeight() {
    this.innerHeight = document.documentElement.clientHeight - 72;
  }

}
