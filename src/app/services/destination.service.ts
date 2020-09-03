import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Destination } from '../models/Destinations';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  url = 'https://falcon-travel-api.herokuapp.com/';

  constructor(
    private http: HttpClient
  ) { }

  saveDestinations(destination: Destination): Promise<any>{
    console.log(destination);
    return this.http.post(`${this.url}/destinations/create`, destination)
    .toPromise()
    .then()
    .catch(err => {
      console.log(err);
    });
  }
}