import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')
}

@Injectable()
export class BreweryService {	
  
  beerLists = [
  {
  	name: 'beer 1',
  	details: 'beer 1',
  	imgSrc: 'https://www.guinness.com/media/1538/guinness_draught_spritzr06bg1_resized_1600-h.jpg',
  },
  {
  	name: 'beer 1',
  	details: 'beer 1',
  	imgSrc: 'https://www.guinness.com/media/1538/guinness_draught_spritzr06bg1_resized_1600-h.jpg',
  },
  {
  	name: 'beer 1',
  	details: 'beer 1',
  	imgSrc: 'https://www.guinness.com/media/1538/guinness_draught_spritzr06bg1_resized_1600-h.jpg',
  },
  ];

  apiURL = "http://api.brewerydb.com/v2/beers?abv=5&key=bf400561b993d3a1e281916f00df36c7&withBreweries=Y";

  constructor(private http: HttpClient) { }

  getRandomBrew(): any {
  	return this.http.get(this.apiURL, httpOptions);
  }

  getBeersList(): any {
    return this.beerLists;
  }
}