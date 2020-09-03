import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ContactUs} from '../models/contactUs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  apiURL = 'https://falcon-travel-api.herokuapp.com/'
  constructor(
    private http: HttpClient
  ) { }
}
