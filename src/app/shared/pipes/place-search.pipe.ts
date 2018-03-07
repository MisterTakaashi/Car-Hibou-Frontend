import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeSearch'
})
export class PlaceSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "salut";
  }

}
