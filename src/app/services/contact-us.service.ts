import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactUs } from '../models/contactUs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  apiURL = 'https://falcon-travel-api.herokuapp.com/api'
  constructor(
    private http: HttpClient) {

  }

  create(userData) {
    return this.http.post<ContactUs> (`${this.apiURL}/contactUs/create`, userData)

    }
}
