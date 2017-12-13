import { browser, by, element } from 'protractor';

export class GlChallengePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gl-root h1')).getText();
  }
}
