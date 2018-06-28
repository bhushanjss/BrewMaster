import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import BeerListComponent from './beer-list.component';
import { BeerListItemComponent } from '../beer-list-item/beer-list-item.component';
import { BreweryService } from '../../services/brewery.service';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerListComponent,
      BeerListItemComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [BreweryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
