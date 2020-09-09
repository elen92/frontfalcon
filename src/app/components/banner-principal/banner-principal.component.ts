import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { CityService } from '../../services/city.service';

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
    this.travel.origin = this.origin;
    this.travel.destination = this.origin;
    const search = await this.destinationService.findDestinations(this.travel);
    console.log(search);
  }

}
