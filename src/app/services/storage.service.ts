import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs' //Permite crerar una variable reactiva, esto quire decir que va estar escuchando los cambios de la variable

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private auth = new BehaviorSubject<{}>(null)

  auth$ = this.auth.asObservable();//Inidica que nos podemos suscribir, ósea escuchar los cambios de  la variable


  constructor() {
    this.auth.next(this.dataUser())
  }

  saveToken(token){
    localStorage.setItem('token', token);
    this.auth.next(this.dataUser())
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

  destruirSesion(){
    localStorage.removeItem('token')
    this.auth.next(null)
  }

  /*isAuthenticate(){
    return this.getToken() != null;
  }*/


}
