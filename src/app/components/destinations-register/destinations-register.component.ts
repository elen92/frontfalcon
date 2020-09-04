import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destinations-register',
  templateUrl: './destinations-register.component.html',
  styleUrls: ['./destinations-register.component.css'],
  providers: [
    DestinationService
  ]
})
export class DestinationsRegisterComponent implements OnInit {

  destinationRegisterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private destinationService: DestinationService
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

  async enviarDestino(): Promise<any>{
    try{
      const destination = await this.destinationService.saveDestinations(this.destinationRegisterForm.value);
      console.log(destination);
    }catch (err){
      console.log(err);
    }
  }
}
