import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
    private route: Router
  ) {
    this.validator()
   }

  ngOnInit(): void {
  }

  validator(){
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signIn(){
    if(this.login.valid){
      this.userService.login(this.login.value).subscribe(
        (dataLogin) => {
          this.storageService.saveToken(dataLogin['jwt']);
          alert('Bienvenido a tu cuenta.');
          this.route.navigate(['/updateUser']);
        },
        (error) => {
          alert('Los datos no coinciden.');
          console.log('error al iniciar sesión ', error['error'].message);
        }
      )
    }else{
      alert("Error, no puedes acceder a tu cuenta")
    }
  }
}
