import { Component, OnInit } from '@angular/core';

import { BreweryService } from '../../services/brewery.service';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export default class BeerSearchComponent implements OnInit {

  constructor(private breweryService: BreweryService ) { }

  searchType: string;
  beerList: any;

  ngOnInit() {
  }

  searchBeer(form) {
  	this.breweryService.searchBeers(form.search, form.searchType).subscribe( res => {
	  this.beerList = [];
      if(res && res.data) { 
      	res.data.map(item => {
      		if(item.description && (item.labels || item.images)) {
      			this.beerList.push(item);
      		}
      	});
      }
    }
    );
  }

}
