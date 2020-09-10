import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { CityService } from '../../services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-principal',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.css']
})
export class BannerPrincipalComponent implements OnInit {

  actualDate = new Date();
  loaded = false;
  cities = [];
  origin: any;
  destination: any;
  travel: any = {
    startDate: this.actualDate.toString(),
    endDate: this.actualDate.toString()
  };

  constructor(
    private router: Router,
    private destinationService: DestinationService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.getCitiesFromApi();
  }

  async getCitiesFromApi(): Promise<any>{
    this.cities = await this.cityService.getByCoincidence();
  }

  async find(): Promise<any> {
    try{
      this.travel.origin = this.origin;
      this.travel.destination = this.destination;
      const search = await this.destinationService.findDestinations(this.travel);
      if (search){
        this.goToShowDestinations(search);
      }
    } catch (err){
      if (err.status === 500){
        console.log('ha ocurrido un error interno');
      }
    }
  }

  goToShowDestinations(destinations): void{
    this.router.navigate(['show-destinations/', JSON.stringify(destinations)]);
  }

}
