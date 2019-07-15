let webdriver = require('selenium-webdriver');

let capabilities = {
  'browserName': 'Firefox',
  'browser_version': '68.0',
  'os': 'Windows',
  'os_version': '10',
  'resolution': '1920x1080',
  'browserstack.user': 'adamreznek1',
  'browserstack.key': 'HEQetigF5DZCqaYLAwoz',
  'name': 'POSSIBEL website topbar dropdown menu navigation test'
}

let driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

let elementInMenu = 1;

const menuNavigation = (element) => {
  if (element < 7) {
    driver.get('http://www.possible.com');
    driver.findElement(webdriver.By.css('#form1 > div.page.index.ng-scope > header > section > nav > ul > li.menu-item.inside-possible')).click();
    driver.findElement(webdriver.By.css(`#form1 > div.page.index.ng-scope > header > section > nav > ul > li.menu-item.inside-possible > nav > div.menu-container.right-aligned > div.dropdown-block > ul > li:nth-child(${element}) > a`)).click();
    driver.getCurrentUrl();
    elementInMenu++;
    menuNavigation(elementInMenu);
  }
}

menuNavigation(elementInMenu);

driver.quit();
