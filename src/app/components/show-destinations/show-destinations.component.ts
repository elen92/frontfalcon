import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Destination } from '../../models/Destinations';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-show-destinations',
  templateUrl: './show-destinations.component.html',
  styleUrls: ['./show-destinations.component.css']
})
export class ShowDestinationsComponent implements OnInit {
  destinations = [];
  cities: any;
  loaded = false;
  noDestinations = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) { }

  async ngOnInit() {
      await this.getCities();
      const destinations = JSON.parse(this.activatedRoute.snapshot.paramMap.get('destinations'));
      if (destinations.length === 0){
        this.noDestinations = true;
      }
      await this.changeCityName(destinations);
  }

  async getCities(){
    try{
      this.cities = await this.cityService.getByCoincidence();
    } catch (err){
      console.log('ha ocurrido un error interno');
    }
  }

  changeCityName(destinations){
    destinations.forEach(destination => {
      this.cities.forEach(city => {
        if (city._id === destination.cityId){
          destination.cityId = city.name;
        }
      });
    });
    this.destinations = destinations;
    this.loaded = true;
  }

  goToDestination(destination){
    this.router.navigate(['/destinationOne/' + destination._id]);
  }

}
