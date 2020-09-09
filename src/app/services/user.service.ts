import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { StorageService } from './storage.service'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = 'https://falcon-travel-api.herokuapp.com/api';


  constructor(
    private http: HttpClient,
    private storageService: StorageService) {


   }

   prepareHeader () {
     return { headers: new HttpHeaders({
       'Content-type': 'application/json',
       'Authorization': this.storageService.getToken()
     }) }
   }

  create(userData){
    return this.http.post<User>(`${this.apiurl}/user/create`, userData)
  }

  login(loginData){
    return this.http.post<User>(`${this.apiurl}/user/login`, loginData)
  }

  getOne(id){
    return this.http.get<User>(`${this.apiurl}/user/getOne/${id}`)
  }

  updateUser(dataUser, id){
    return this.http.put<User>(`${this.apiurl}/user/update/${id}`, dataUser, this.prepareHeader ())
  }

}
