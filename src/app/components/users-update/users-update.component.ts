import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {
  userData;
  usersUpdate: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
  ) {
    this.userData = this.getData();
    this.validator();
    
   }

  ngOnInit(): void {
    
  }

  validator(){
    console.log('this.userData ', this.userData.email)
    this.usersUpdate = this.formBuilder.group({
      firstName: [this.userData.firstName,Validators.required],
      lastName: [this.userData.lastName,Validators.required],
      email: [this.userData.email,Validators.required],
      phone: [this.userData.phone,Validators.required],
      photo: [this.userData.photo,Validators.required],
      address: [this.userData.address,Validators.required],
      idDocument: [this.userData.idDocument,Validators.required],
      nationality: [this.userData.nationality,Validators.required],
    });

  }
  updateUser(){
    if(this.usersUpdate.valid){
      this.userService.updateUser(this.usersUpdate.value, this.userData.sub).subscribe(
        (userUpdated) => {
          this.storageService.saveToken(userUpdated['jwt']);
          alert('Datos actualizados')
        }, (error) => {
          console.error('Error al modificar el usuario', error)
        }
      )
    }else{
      // tslint:disable-next-line: quotemark
      alert("Error, no se puede almacenar la informacion");
    }
  }

  getData(){
    return this.storageService.dataUser();
    //console.log('dataUser', dataUser.sub)
    /*this.userService.getOne(dataUser.sub).subscribe(
      (infoUser) => {
        this.userData = infoUser;
      },
      (error) => {
        console.log('No se pudieron obtener los datos.')
      }
    )*/
  }

}
