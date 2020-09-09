import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  apiURL = 'https://falcon-travel-api.herokuapp.com/api';

  constructor(private http: HttpClient) {

   }
   create(userData){
     return this.http.post<Purchase>(`${this.apiURL}/purchase/create`, userData);
   }
}
