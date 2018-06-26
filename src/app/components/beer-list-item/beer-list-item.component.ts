import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.css']
})
export class BeerListItemComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Input() details: string;
  @Input() imgSrc: string;

  ngOnInit() {
  }

}
