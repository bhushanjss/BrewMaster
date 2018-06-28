import { Observable } from 'rxjs';

export class BreweryServiceMock {	
  
  beerLists = [];
  mockResponse = {
    data: [
       {
          name: 'beer 1',
          labels: {
            medium: ''
          }
      },
      {
          name: 'beer 2',
          labels: {
            medium: ''
          }
      }
   ]
  };

  mockSearchResponse = {
    data: [
       {
          name: 'beer 1',
          description: 'beer 1',
          labels: {
            medium: ''
          }
      },
      {
          name: 'beer 2',
          description: 'beer 2',
          labels: {
            medium: ''
          }
      }
   ]
  };

  constructor() { }

  getRandomBrew(): any  {
    return Observable.of(this.mockResponse);
  }

  searchBeers(query: string, type: string): any {
    return Observable.of(this.mockSearchResponse);
  }
}