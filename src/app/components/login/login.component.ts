import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.validator()
   }

  ngOnInit(): void {
  }

  validator(){
    this.login = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  signIn(){
    if(this.login.valid){
      alert("Bienvenido de nuevo")
    }else{
      alert("Error, no puedes acceder a tu cuenta")
    }
  }
}
