var Confirm = require('../../src/confirm');
var $ = require('jquery');

describe('dialog', function() {
  var dialog;

  it('trigger', function() {
    var trigger = $('<div id="trigger"/>').appendTo('body');
    dialog = new Confirm({
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
    dialog = new Confirm({
      content: 'mask',
      effect: 'none'
    });
    expect( typeof dialog.mask).to.be('object');
    expect( dialog.mask.is(':visible')).to.be.ok();
    dialog.hide();
    expect( typeof dialog.mask).to.be('undefined');
  });

  it('submit', function() {
    dialog = new Confirm({
      content: 'submit',
      effect: 'none'
    });
    dialog.role('submit').trigger('click');
    expect( typeof dialog.uniqueId).to.be('undefined');
    expect( typeof dialog.destroy).to.be('function');
  });

  it('cancel', function() {
    dialog = new Confirm({
      content: 'cancel'
    });
    dialog.role('cancel').trigger('click');
    setTimeout(function () {
      expect( typeof dialog.uniqueId).to.be('undefined');
      expect( typeof dialog.destroy).to.be('function');
      start();
    }, 1000);
  });

  it('submit/cancel/returnFalse', function() {
    dialog = new Confirm({
      content: 'submit/cancel/returnFalse',
      events: {
        submit: function () {
          return false;
        }
      }
    });
    dialog.on('cancel', function () {
      return false;
    });
    dialog.role('submit').trigger('click');
    expect( dialog.is(':visible')).to.be.ok();
    dialog.role('cancel').trigger('click');
    expect( dialog.is(':visible')).to.be.ok();
    dialog.destroy();
  });
});
