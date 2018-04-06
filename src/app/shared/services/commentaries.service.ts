import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/api-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Commentary }  from '../models/commentary';
import { SharedModule } from '../shared.module';

@Injectable()
export class CommentariesService {

    constructor(
        private _http: HttpClient
    ) { }

    getForItinerary(itinerary_id: number): Observable<ApiResponse<Commentary[]>> {
        return this._http.get<ApiResponse<Commentary[]>>(`${SharedModule.API_URL}/commentaries?itinerary=${itinerary_id}`);
    }

    save(text: String, itinerary_id: number): Observable<ApiResponse<Commentary>> {
        return this._http.post<ApiResponse<Commentary>>(`${SharedModule.API_URL}/commentaries`, {
            content: text,
            itinerary_id: itinerary_id
        })
    }
}
