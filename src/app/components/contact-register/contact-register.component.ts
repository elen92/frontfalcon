import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ContactUsService} from '../../services/contact-us.service';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {

  contactRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private services: ContactUsService
  ) {
    this.validator();
  }

  ngOnInit(): void {
  }

  validator(): void {
    this.contactRegister = this.formBuilder.group({
      eventType: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

    contactUs(): void{
    if (this.contactRegister.valid){
        this.services.create(this.contactRegister.value).subscribe(
          (contactData) => {
            console.log('Información enviada')
          },(error) => {
            console.error('No se envió la información')
          }
        )

      alert('se puede guardar');
    }else{
      alert('Error, no se pudo almacenar');
    }
  }
}
