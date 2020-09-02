import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-destinations-register',
  templateUrl: './destinations-register.component.html',
  styleUrls: ['./destinations-register.component.css']
})
export class DestinationsRegisterComponent implements OnInit {

  destinationRegisterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.validator();
  }

  ngOnInit(): void {
  }

  validator(): void{
    this.destinationRegisterForm = this.formBuilder.group({
      destinationName: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      stay: ['', Validators.required],
      imageLinks: ['', Validators.required],
    });
  }

  enviarDestino(): void{
    if (this.destinationRegisterForm.valid){
      alert('se puede guardar');
    }else{
      alert('Error, no se pudo almacenar');
    }
  }
}
