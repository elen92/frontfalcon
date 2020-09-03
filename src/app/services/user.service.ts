import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = 'https://falcon-travel-api.herokuapp.com/';

  constructor(private http: HttpClient) {

   }
}
