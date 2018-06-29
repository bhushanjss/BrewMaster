import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BreweryService {	
  
  beerLists = [];

  apiKey = "bf400561b993d3a1e281916f00df36c7";

  constructor(private http: HttpClient) { }

  getRandomBrew(): any {
  	return this.http.get(`/v2/beers?key=${this.apiKey}&abv=5&withBreweries=Y`);
  }

  searchBeers(query: string, type: string): any {
    const url = `/v2/search?key=${this.apiKey}&q=${query}&type=${type}`;
    return this.http.get(url);
  }
}