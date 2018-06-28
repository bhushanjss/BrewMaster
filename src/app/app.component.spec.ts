import { TestBed, async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BreweryService } from './services/brewery.service';
import  BeerDetailsComponent  from './components/beer-details/beer-details.component';
import  BeerSearchComponent  from './components/beer-search/beer-search.component';
import  BeerListComponent  from './components/beer-list/beer-list.component';
import { BeerListItemComponent } from './components/beer-list-item/beer-list-item.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BeerDetailsComponent,
        BeerSearchComponent,
        BeerListComponent,
        BeerListItemComponent
      ],
  imports: [
    HttpClientModule,
    FormsModule
  ],
  providers: [BreweryService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
