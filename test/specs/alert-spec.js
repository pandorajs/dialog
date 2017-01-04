var $ = require('jquery');
var Alert = require('../../src/alert');

describe('alert', function() {
  var dialog;
  it('trigger', function() {
    var trigger = $('<div id="trigger"/>').appendTo('body');
    dialog = new Alert({
      content: 'trigger',
      trigger: '#trigger'
    });
    expect( dialog.is(':hidden')).to.be.ok();
    trigger.trigger('click');
    expect( dialog.is(':visible')).to.be.ok();
    dialog.destroy();
    trigger.remove();
  });

  it('mask', function() {
    dialog = new Alert({
      content: 'mask'
    });
    expect( typeof dialog.mask).to.be('object');
    setTimeout(function () {
      expect( dialog.mask.is(':visible')).to.be.ok();
      dialog.hide();
      setTimeout(function () {
        expect( typeof dialog.mask).to.be('undefined');
        start();
      }, 1000);
    }, 1000);
  });

  it('submit', function() {
    dialog = new Alert({
      content: 'submit'
    });
    dialog.role('submit').trigger('click');
    setTimeout(function () {
      expect( typeof dialog.uniqueId).to.be('undefined');
      expect( typeof dialog.destroy).to.be('function');
      start();
    }, 1000);
  });

  it('submit/returnFalse', function() {
    dialog = new Alert({
      content: 'submit'
    });
    dialog.on('submit', function () {
      return false;
    });
    dialog.role('submit').trigger('click');
    expect( dialog.is(':visible')).to.be.ok();
    dialog.destroy();
  });

})
