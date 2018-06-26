import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export default class BeerDetailsComponent implements OnInit {

  constructor(private breweryService: BreweryService ) { }

  name: string;
  details: string;
  imgSrc: string;

  ngOnInit() {
  	const item = this.breweryService.getRandomBrew();
  	this.name = item.name;
  	this.details = item.details;
  	this.imgSrc = item.imgSrc;
  }

}
