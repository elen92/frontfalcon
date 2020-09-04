import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveToken(token){
    console.log('token --> ', token)
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  /*isAuthenticate(){
    return this.getToken() != null;
  }*/


}
