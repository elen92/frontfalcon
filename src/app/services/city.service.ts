import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {City} from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiURL = 'https://falcon-travel-api.herokuapp.com/api/';

  constructor(
    private http: HttpClient
  ) { }

  getByCoincidence(): Promise<any> {

    return this.http.get(`${this.apiURL}/cities/getAll`)
    .toPromise()
    .then(cities => cities)
    .catch(error => error);
  }
}
