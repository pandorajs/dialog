var Dialog = require('../../src/dialog');
var $ = require('jquery');

describe('dialog', function() {
  var keydown = $.Event('keydown');
  keydown.which = keydown.keyCode = 27;

  it('trigger', function() {
    var trigger = $('<div id="trigger"/>').appendTo('body');
    var dialog = new Dialog({
      content: 'trigger',
      trigger: '#trigger'
    });
    expect( dialog.is(':hidden')).to.be.ok()
    trigger.trigger('click');
    expect( dialog.is(':visible')).to.be.ok()
    dialog.destroy();
    trigger.remove();
  });

  it('mask', function() {
    var baseElement = $('<div id="trigger"/>')
      .css({
        width: 200,
        height: 200
      }).appendTo('body');
    var dialog = new Dialog({
      baseElement: trigger,
      content: 'mask',
      mask: true
    });
    expect( typeof dialog.mask).to.be('object')
    setTimeout(function () {
      expect( dialog.mask.is(':visible')).to.be.ok()
      dialog.hide();
      setTimeout(function () {
        expect( dialog.mask.is(':hidden')).to.be.ok()
        dialog.show();
        dialog.mask.$().trigger(keydown);
        setTimeout(function () {
          expect( dialog.mask.is(':hidden')).to.be.ok()
          dialog.destroy();
          expect( typeof dialog.mask).to.be('undefined');
          baseElement.remove();
        }, 1000);
      }, 1000);
    }, 1000);
  });

  it('mask/resize', function() {
    var dialog = new Dialog({
      css: {
        position: 'absolute'
      },
      content: 'mask/resize',
      mask: true
    });
    $(window).triggerHandler('resize');
    expect(1).to.be.ok()
    dialog.destroy();
  });

  it('text', function() {
    var dialog = new Dialog({
      content: 'text'
    });
    expect( dialog.role('content').text()).to.be('text');
    dialog.destroy();
  });

  it('html', function() {
    var dialog = new Dialog({
      content: '<i>html</i>'
    });
    expect( dialog.role('content').text()).to.be('html')
    expect( dialog.role('content').html()).to.be('<i>html</i>')
    dialog.destroy();
  });

  it('keydown/escape', function() {
    var dialog = new Dialog({
      content: 'keydown/escape',
      effect: 'none'
    });
    dialog.$().trigger(keydown);
    expect( dialog.is(':hidden')).to.be.ok()
    dialog.destroy();
  });

  it('focus', function() {
    var dialog1 = new Dialog({
      content: 'focus'
    });
    var dialog = new Dialog({
      content: 'focus'
    });
    dialog1.$().trigger('mousedown');
    dialog.$().trigger('mousedown');
    expect( +dialog1.$().css('zIndex')).to.be(dialog1.option('css/zIndex'))
    expect( +dialog.$().css('zIndex')).to.be(dialog.option('css/zIndex') + 1)
    dialog1.destroy();
    dialog.destroy();
  });

  it('hide/show', function() {
    var dialog = new Dialog({
      content: 'hide/show',
      effect: 'none'
    });
    dialog.hide();
    expect( dialog.is(':hidden')).to.be.ok()
    dialog.show();
    expect( dialog.is(':visible')).to.be.ok()
    dialog.destroy();
  });

  it('close', function() {
    var dialog = new Dialog({
      content: 'close',
      effect: 'none'
    });
    dialog.role('close').trigger('click');
    expect( dialog.is(':hidden')).to.be.ok()
    dialog.destroy();
  });

  it('close/returnFalse', function() {
    var dialog = new Dialog({
      content: 'close/returnFalse',
      effect: 'none',
      events: {
        'close': function () { return false; }
      }
    });
    dialog.role('close').trigger('click');
    expect( dialog.is(':visible')).to.be.ok()
    dialog.destroy();
  });

  it('destroy', function() {
    var dialog = new Dialog({
      content: 'destroy'
    });
    dialog.destroy();
    expect( typeof dialog.uniqueId).to.be('undefined')
    expect( typeof dialog.destroy).to.be('function')
  });
});
