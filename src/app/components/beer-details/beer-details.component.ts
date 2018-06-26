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
    this.loadRandomBeer();
  }

  loadRandomBeer() {
    this.breweryService.getRandomBrew().subscribe( res => {
      if(res && res.data) {
        let count = 0;
        let item = this.getNextRandomBeer(res.data);
        while(!item.description || !item.labels) {
          item = this.getNextRandomBeer(res.data);
          count ++;
          if(count > res.data.length) {
            break;
          }
        }
        this.name = item.name;
        this.details = item.description;
        this.imgSrc = item.labels.medium;   
      }
    }
    );
  }

  getNextRandomBeer(data) {
      const idx = this.getRandomInt(data.length);
      return data[idx];
  }

  getRandomInt(max) {
	  return Math.floor(Math.random() * Math.floor(max));
  }

}
