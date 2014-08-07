define(function (require, exports, module) {

/**
 * 提示层
 *
 * @module Dialog
 */

'use strict';

var Dialog = require('./dialog');

/**
 * Tips 
 * 提示层
 * 
 * @class Tips
 * @extends Dialog
 * @constructor
 */
var Tips = Dialog.extend({

  defaults: {
    /**
     * 提示层自动关闭时间，单位秒
     * 
     * @attribute timeout
     * @default 2 
     * @type {Number}
     */
    timeout: 2,
    data: {
      close: ''
    }
  },

  render: function () {
    var self = this;

    if (!self.option('trigger')) {
      self.hide(function () {
        this.destroy();
      });
    }

    Tips.superclass.render.apply(self);

    setTimeout(function () {
      self.close();
    }, self.option('timeout') * 1000);

  }

});

module.exports = Tips;

});
