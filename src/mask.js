define(function (require, exports, module) {

/**
 * 遮罩层
 *
 * @module Dialog
 */

'use strict';

var $ = require('$'),
  Overlay = require('overlay');

/**
 * Mask 
 * 遮罩层
 * 
 * @class Mask
 * @extends Overlay
 * @constructor
 */
var Mask = Overlay.extend({

  defaults: {
    /**
     * 实例化后是否自动显示
     * 
     * @attribute autoShow
     * @default false
     * @type {Boolean}
     */
    autoShow: false,
    // classPrefix: 'ue-mask',
    css: {
      position: (!!window.ActiveXObject && !window.XMLHttpRequest) ? 'absolute' : 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: '#000',
      opacity: 0.2
    }
  },

  setup: function () {
    var self = this,
      baseElement = self.option('baseElement');

    if (baseElement) {
      self.baseElement = $(baseElement);
      self.setPosition = setPosition;
    } else {
      if (self.option('css/position') === 'absolute') {
        self.setPosition = setPosition;
      }
    }

    // IE6
    if (!!window.ActiveXObject && !window.XMLHttpRequest) {
      $('<iframe src="about:blank"></iframe>')
        .css({
          width: '100%',
          height: '100%',
          opacity: 0
        })
        .appendTo(self.element);
    }

    Mask.superclass.setup.apply(self);
  },

  destroy: function () {
    $(this.viewport).off('resize' + this.delegateNS);

    Mask.superclass.destroy.apply(this);
  }

});

/* jshint validthis:true */
/**
 * 更新遮罩浮层位置
 *
 * @method setPosition
 */
function setPosition () {
  var self = this;

  if (!self.baseElement) {
    self.baseElement = $(self.document);
  }

  self.element
    .css({
      width: 0,
      height: 0
    })
    .css({
      width: self.baseElement.outerWidth(),
      height: self.baseElement.outerHeight()
    });

  if (self.option('css/position') === 'absolute' && !self.resizeBinded) {
    $(self.viewport).on('resize' + self.delegateNS, function () {
      self.setPosition();
    });
    self.resizeBinded = true;
  }

  Mask.superclass.setPosition.apply(self);
}

module.exports = Mask;

});
