let webdriver = require('selenium-webdriver');

let capabilities = {
  'browserName': 'Chrome',
  'browser_version': '75.0',
  'os': 'OS X',
  'os_version': 'Mojave',
  'resolution': '1920x1080',
  'browserstack.user': 'adamreznek1',
  'browserstack.key': 'HEQetigF5DZCqaYLAwoz',
  'name': 'POSSIBLE website landing slider navigation test'
}

let driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.possible.com');
driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope > article > section.index-content > div > header > nav > button.pager.next')).click();
driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope > article > section.index-content > div > header > ul > li > h2 > a')).getAttribute('innerText');
driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope > article > section.index-content > div > header > nav > button.pager.prev')).click();
driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope > article > section.index-content > div > header > ul > li > h2 > a')).getAttribute('innerText');

driver.quit();
