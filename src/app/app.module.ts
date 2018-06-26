import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import  BeerDetailsComponent  from './components/beer-details/beer-details.component';
import  BeerSearchComponent  from './components/beer-search/beer-search.component';
import  BeerListComponent  from './components/beer-list/beer-list.component';
import { BeerListItemComponent } from './components/beer-list-item/beer-list-item.component';
import { BreweryService } from './services/brewery.service';


@NgModule({
  declarations: [
    AppComponent,
    BeerDetailsComponent,
    BeerSearchComponent,
    BeerListComponent,
    BeerListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
