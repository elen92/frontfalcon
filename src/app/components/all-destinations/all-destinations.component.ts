import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-destinations',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.css']
})
export class AllDestinationsComponent implements OnInit {
  
  allDestinations

  constructor(private service: DestinationService) {}

  ngOnInit(): void {
    this.getAll()
    
  }

  getAll = () =>{
    this.service.conectionApi().subscribe((destinations)=>{
    this.allDestinations=destinations
    console.log(this.allDestinations)
    
    }, (err)=>{
      console.error('Error')
    })
  }
}
