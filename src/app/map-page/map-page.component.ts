import { Component, OnInit, HostListener } from '@angular/core';
import { NouiFormatter } from 'ng2-nouislider';

// Utilisé dans le cas de tooltips
// export class RadiusFormatter implements NouiFormatter {
//   to(value: number): string {
//     return Math.floor(value) + 'm';
//   };

//   from(value: string): number {
//     let radius = Number.parseInt(value.split('m')[0]);

//     return radius;
//   }
// }

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateMapHeight();
  }

  radiusSlider: number = 500;
  radiusSliderConfig: any = {
    range: {
      min: 100,
      max: 1000
    },
    // tooltips: new RadiusFormatter()
    // pips: {
    //   mode: 'steps',
    //   density: 1
    // }
  };

  circleCoords: any = {lat: 43.62, lng: 1.43};

  innerHeight: number;

  users: number[];

  constructor() { }

  ngOnInit() {
    this.calculateMapHeight();

    this.users = [0,0,0,0,0,0,0,0,0,0];
  }

  mapOnClick(event: any) {
    this.circleCoords = event.coords;
  }

  private calculateMapHeight() {
    this.innerHeight = document.documentElement.clientHeight - 72;
  }

}
