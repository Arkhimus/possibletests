let webdriver = require('selenium-webdriver');

let capabilities = {
  'browserName': 'Chrome',
  'browser_version': '75.0',
  'os': 'OS X',
  'os_version': 'Mojave',
  'resolution': '1920x1080',
  'browserstack.user': 'adamreznek1',
  'browserstack.key': 'HEQetigF5DZCqaYLAwoz',
  'name': 'POSSIBLE website searchfield test'
}

let driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.possible.com');
driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope > header > section > nav > ul > li.menu-item.search > a')).click();
driver.findElement(webdriver.By.css('#search-query')).sendKeys('assurance');
driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope.search-active > div.search-overlay.ng-scope > header > div > button')).click();
driver.wait(function () {
  return driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope.search-active > div.search-overlay.ng-scope > article > section > a > span'));
}, 1000);
driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope.search-active > div.search-overlay.ng-scope > article > section > a > span')).click();
driver.wait(function () {
  return driver.findElement(webdriver.By.css('#form1 > div.page.article.ng-scope > article > div.article-column > div.article-column-split > div.article-content-container.grid > div > h1'));
}, 1000);
driver.findElement(webdriver.By.css('#form1 > div.page.article.ng-scope > article > div.article-column > div.article-column-split > div.article-content-container.grid > div > h1')).getAttribute('innerText');

driver.quit();
