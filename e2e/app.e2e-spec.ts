import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('brew-master App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
  	page.navigateTo();
    expect(page.getParagraphText().getText()).toEqual('Brewery Master');
  });

  it('should display a Random Beer Title', () => {
    page.beerDetailsTitle().getText().then((val) => {
    	expect(val.length).not.toEqual(0);
    });
  });

  it('should display a Random Beer Details', () => {
    page.beerDetailsDescription().getText().then((val) => {
    	expect(val.length).not.toEqual(0);
    });
  });

  it('should display Search Title', () => {
    expect(page.searchTitle()).toEqual('Search');
  });

  it('should display Search Results Title', () => {
    expect(page.searchResultsTitle()).toEqual('Search Results');
  });

  it('should search a beer with name india',() => {
  	page.searchInput().sendKeys('india');
  	browser.sleep(2000);
  	page.searchRadioButtons().click();
	browser.sleep(2000);
  	page.searchButton().click();
  	browser.sleep(5000);
  	expect(page.searchResults().isPresent()).toBeTruthy();
  });

});
