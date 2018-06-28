import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BreweryService } from './brewery.service';

describe('BreweryService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        BreweryService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('getRandomBrew()', () => {

    it('should return an Observable<Array<any>>',
        inject([BreweryService, XHRBackend], (breweryService, mockBackend) => {

        const mockResponse = {
          data: [
             {
                name: 'beer 1',
                details: 'beer 1',
                labels: {
                  medium: ''
                }
            },
            {
                name: 'beer 2',
                details: 'beer 2',
                labels: {
                  medium: ''
                }
            }
         ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        breweryService.getRandomBrew().subscribe((res) => {
          if(res && res.data) {
            expect(res.data.length).toBe(2);
            expect(res.data[0].name).toEqual('beer 1');
          }
        });

    }));

    describe('searchBeers()', () => {

    it('should return an Observable<Array<any>>',
        inject([BreweryService, XHRBackend], (breweryService, mockBackend) => {

        const mockResponse = {
          data: [
             {
                name: 'beer 1',
                details: 'beer 1',
                labels: {
                  medium: ''
                }
            },
            {
                name: 'beer 2',
                details: 'beer 2',
                labels: {
                  medium: ''
                }
            }
         ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        breweryService.searchBeers('dublin','beer').subscribe((res) => {
          if(res && res.data) {
            expect(res.data.length).toBe(2);
            expect(res.data[0].name).toEqual('beer 1');
          }
        });

    }));
  });
  });
});