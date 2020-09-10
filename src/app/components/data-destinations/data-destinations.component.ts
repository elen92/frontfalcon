import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {DestinationService} from '../../services/destination.service'

@Component({
  selector: 'app-data-destinations',
  templateUrl: './data-destinations.component.html',
  styleUrls: ['./data-destinations.component.css']
})
export class DataDestinationsComponent implements OnInit {
  oneDestination
  
  constructor(private service: DestinationService, private params:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOne()
  }

  getOne = () =>{
    const id = this.params.snapshot.paramMap.get('id')
    this.service.getOne(id).subscribe((destinations)=>{
    this.oneDestination=destinations
    console.log(this.oneDestination)
    }, (err)=>{
      console.error('Error')
    })
  }
}
