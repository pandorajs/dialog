var Tips = require('../../src/tips');
var $ = require('jquery');

describe('tips', function() {
  var dialog;

  it('timeout', function() {
    dialog = new Tips({
      content: 'timeout'
    });
    expect( dialog.is(':visible')).to.be.ok();
  });

  it('timeout/1', function() {
    dialog = new Tips({
      content: 'timeout'
    });
    setTimeout(function () {
      expect( dialog.is(':visible')).to.be.ok();
    }, 1000);
  });

  it('timeout/2', function() {
    dialog = new Tips({
      content: 'timeout'
    });
    setTimeout(function () {
      equal( typeof dialog.uniqueId).to.be('undefined');
    }, 4000);
  });

  it('timeout/3', function() {
    dialog = new Tips({
      content: 'timeout',
      timeout: 3
    });
    setTimeout(function () {
      expect( dialog.is(':visible')).to.be.ok();
    }, 2000);
  });
});
