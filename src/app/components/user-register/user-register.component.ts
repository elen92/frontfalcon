import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.validator()
  }

  ngOnInit(): void {
  }

  validator(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      photo: ['', Validators.required],
      address: ['', Validators.required],
      idDocument: ['', Validators.required]
    })
  }

  saveUser(){
    if(this.userForm.valid){
      alert("La información se puede almacenar")
    }else{
      alert("Error, no se puede almacenar la información")
    }
  }

}
