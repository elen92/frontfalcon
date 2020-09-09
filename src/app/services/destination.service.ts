import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Destination } from '../models/Destinations';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  url = 'https://falcon-travel-api.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) { }

  saveDestinations(destination: Destination): Promise<any> {
    return this.http.post(`${this.url}/destinations/create`, destination)
    .toPromise()
    .then(destination => {
      return destination;
    })
    .catch(err => {
      console.log(err);
    });
  }

  findDestinations(travel): Promise<any> {
    const url =`http://localhost:3000/api/destinations/getByParams/${travel.origin}/${travel.destination}/${travel.startDate}/${travel.endDate}`;
    return this.http.get(url)
    .toPromise()
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
    });
  }
}
