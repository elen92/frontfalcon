import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {

  contactRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
      alert('se puede guardar');
    }else{
      alert('Error, no se pudo almacenar');
    }
  }
}
