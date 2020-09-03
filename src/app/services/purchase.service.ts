import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import{Purchase}from '../models/purchase'

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  apiURL = 'https://falcon-travel-api.herokuapp.com/'

  constructor(
    private http: HttpClient
  ) { }
}
