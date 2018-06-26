import { Component, OnInit } from '@angular/core';

import { BreweryService } from '../../services/brewery.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export default class BeerListComponent implements OnInit {

  constructor(private breweryService: BreweryService) { }

  beerLists$ =  this.breweryService.getListOfBeers();

  ngOnInit() {

  }

}
