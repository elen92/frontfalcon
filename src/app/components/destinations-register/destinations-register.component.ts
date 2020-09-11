import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-destinations-register',
  templateUrl: './destinations-register.component.html',
  styleUrls: ['./destinations-register.component.css'],
  providers: [
    DestinationService
  ]
})
export class DestinationsRegisterComponent implements OnInit {

  loaded = false;
  destinationRegisterForm: FormGroup;
  cities = [];

  constructor(
    private formBuilder: FormBuilder,
    private destinationService: DestinationService,
    private cityService: CityService,
    private route: Router
  ) {
    this.validator();
  }

  ngOnInit(): any {
    this.getCitiesFromApi();
  }

  validator(): void{
    this.destinationRegisterForm = this.formBuilder.group({
      destinationName: ['', Validators.required],
      cityId: ['', Validators.required],
      country: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      stay: ['', Validators.required],
      imageLinks: ['', Validators.required],
    });
  }

  async getCitiesFromApi(): Promise<any>{
    try{
      this.cities = await this.cityService.getByCoincidence();
      this.loaded = true;
    }catch (err){
      console.log(err);
    }
  }

  async enviarDestino(): Promise<any>{
    try{
      const destination = await this.destinationService.saveDestinations(this.destinationRegisterForm.value);
      if (destination){
        this.destinationRegisterForm.reset();
        this.route.navigate(['/allDestinations'])
      }
    }catch (err){
      console.log(err);
    }
  }
}
