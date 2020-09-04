import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private services: UserService
  ) {
    this.validator()
  }

  ngOnInit(): void {
  }

  validator(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      photo: ['', Validators.required],
      address: ['', Validators.required],
      idDocument: ['', Validators.required],
      nationality: ['', Validators.required]
    })
  }

  saveUser(){
    if(this.userForm.valid){
      this.services.create(this.userForm.value).subscribe(
        (userData)=>{
          alert("Usuario creado con exito")
          console.log("Muy bien")
          
        },(error)=>{
          console.error("Error al crear el usuario",error)
        }
      )
    }else{
      alert("Error, no se puede almacenar la información")
      console.log(this.userForm.errors)
    }
  }

}
