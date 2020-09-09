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

  dataUser() {
    //console.log('aca llego')
    const token = this.getToken();
    if(!token){
      return null;
    }

    let urlBase64 = token.split('.')[1];
    let b64 = urlBase64.replace('-', '+').replace('_', '/');
    //console.log(this.decodeData(b64))
    return JSON.parse(this.decodeData(b64));
  }

  decodeData(str){
    return decodeURIComponent(atob(str).split('').map(
      function(c){ 
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }
    ).join(''))
  }

  /*isAuthenticate(){
    return this.getToken() != null;
  }*/


}
