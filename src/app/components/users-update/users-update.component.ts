import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  usersUpdate: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.validator();
   }

  ngOnInit(): void {
  }

  validator(){
    this.usersUpdate = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required, Validators.email],
      phone: ['',Validators.required],
      password: ['',Validators.required],
      photo: ['',Validators.required],
      address: ['',Validators.required],
      idDocument: ['',Validators.required],
    });

  }
  updateUser(){
    if(this.usersUpdate.valid){
      // tslint:disable-next-line: quotemark
      alert("La información se puede almacenar");
    }else{
      // tslint:disable-next-line: quotemark
      alert("Error, no se puede almacenar la informacion");
    }
  }

}
