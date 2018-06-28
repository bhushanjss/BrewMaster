import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import  BeerSearchComponent  from './beer-search.component';
import BeerListComponent from '../beer-list/beer-list.component';
import { BeerListItemComponent } from '../beer-list-item/beer-list-item.component';
import { BreweryService } from '../../services/brewery.service';
import { BreweryServiceMock } from '../../services/brewery-service-mock';

describe('BeerSearchComponent', () => {
  let component: BeerSearchComponent;
  let fixture: ComponentFixture<BeerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerSearchComponent,
      BeerListComponent,
      BeerListItemComponent ],
      imports: [
        HttpClientModule,
        FormsModule
      ],
      providers: [{
        provide: BreweryService, useClass: BreweryServiceMock
      }]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(BeerSearchComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search', () => {
    component.searchBeer({search:'india', searchType: 'beer'});
    expect(component.beerList.length).toBe(2);
  });
});
