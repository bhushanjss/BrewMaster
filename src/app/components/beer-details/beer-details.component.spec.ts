import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import  BeerDetailsComponent  from './beer-details.component';
import { BreweryService } from '../../services/brewery.service';
import { BreweryServiceMock } from '../../services/brewery-service-mock';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailsComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [{
        provide: BreweryService, useClass: BreweryServiceMock
      }]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(BeerDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
