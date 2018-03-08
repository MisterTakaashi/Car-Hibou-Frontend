import { Component, OnInit } from '@angular/core';

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PhotonService } from '../shared/services/photon.service';
import { PhotonGeo } from '../shared/models/photon-geo';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dateSearch: Date;
  placeSearch: string;
  placeRadius: number = 100;
  placeSelected: any = {};

  placeSearchSource: Observable<PhotonGeo>;

  constructor(
    private _photonService: PhotonService
  ) {
    this.placeSearchSource = Observable.create((observer: any) => {
      // Runs on every search
      this._photonService.search(this.placeSearch).subscribe(data => {
        let searchArray = data.features;
        searchArray.map(x => x.properties.formattedName = `${x.properties.name}, ${x.properties.city}, ${x.properties.country}`);
        observer.next(searchArray);
      });
    });
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
    console.log(e.item);
    this.placeSelected.lng = e.item.geometry.coordinates[0];
    this.placeSelected.lat = e.item.geometry.coordinates[1];
  }

  ngOnInit() {
    
  }

}
