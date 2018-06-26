import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import  BeerDetailsComponent  from './components/beer-details/beer-details.component';
import  BeerSearchComponent  from './components/beer-search/beer-search.component';
import  BeerListComponent  from './components/beer-list/beer-list.component';
import { BeerListItemComponent } from './components/beer-list-item/beer-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerDetailsComponent,
    BeerSearchComponent,
    BeerListComponent,
    BeerListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
