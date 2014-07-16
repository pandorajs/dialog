define(function (require, exports, module) {

/**
 * 对话框
 *
 * @module Dialog
 */

'use strict';

var Dialog = require('./dialog');

/**
 * Tips
 * @class Tips
 * @extends Dialog
 * @constructor
 */
var Tips = Dialog.extend({

  defaults: {
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
