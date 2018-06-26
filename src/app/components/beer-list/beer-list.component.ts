import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export default class BeerListComponent implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
