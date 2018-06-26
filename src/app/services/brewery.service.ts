import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  getRandomBrew() {
  	return this.beerLists[0];
  }

  getListOfBeers() {
  	return this.beerLists;
  }
}