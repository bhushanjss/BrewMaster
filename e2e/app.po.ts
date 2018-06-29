import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1'));
  }

  beerDetailsTitle() {
    return element(by.css('.beer-details h5'));
  }

  beerDetailsDescription() {
    return element(by.css('.beer-details p'));
  }

  anotherBeer() {
	return element(by.css('app-beer-details .another-beer'));
  }	

  moreBeer() {
	return element(by.css('app-beer-details .more-beer'));
  }

  searchTitle() {
  	return element(by.css('app-beer-search h4')).getText();
  }

  searchInput() {
  	return element(by.css('app-beer-search form .search-input'));
  }

  searchRadioButtons() {
  	return element(by.css('app-beer-search .form-check-input'));
  }

  searchButton() {
  	return element(by.css('app-beer-search .search-button button'))
  }

  searchResultsTitle() {
  	return element(by.css('app-beer-list h4')).getText();
  }

  searchResults() {
  	return element(by.css('app-beer-list .beer-list-item'));
  }

}
