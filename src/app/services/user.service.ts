import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = 'https://falcon-travel-api.herokuapp.com/api';


  constructor(private http: HttpClient) {


   }
  create(userData){
    return this.http.post<User>(`${this.apiurl}/user/create`, userData)
  }

  login(loginData){
    return this.http.post<User>(`${this.apiurl}/user/login`, loginData)
  }

}
