import { Component, OnInit, HostListener } from '@angular/core';

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

  innerHeight: number;

  users: number[];

  constructor() { }

  ngOnInit() {
    this.calculateMapHeight();

    this.users = [0,0,0,0,0,0,0,0,0,0];
  }

  mapOnClick(event: MouseEvent) {
    console.log(event);
  }

  private calculateMapHeight() {
    this.innerHeight = document.documentElement.clientHeight - 72;
  }

}
