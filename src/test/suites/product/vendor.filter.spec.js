const _ = require('lodash');
const expectChai = require('chai').expect;

describe('StackDemo filters', () => {

  beforeEach('Open StackDemo', () => {
    browser.url('');
  })

  afterEach('clear sessionstorage', () => {
    browser.execute(() => sessionStorage.clear())
  })

  it('Apply vendor filter', () => {
    $("//span[contains(text(), 'Apple')]").click();
    $("//span[contains(text(), 'Samsung')]").click();
    browser.pause(5000)                                               // Example for static wait
    all_phones = $$(".shelf-item__title").map(function(element){
      return element.getText()
    });
    expectChai(_.every(all_phones,  function (value) {
      return (_.includes(value, 'iPhone') || _.includes(value, 'Galaxy'))
    })).to.equal(true, "Vendor filter is not applied");
  })
})