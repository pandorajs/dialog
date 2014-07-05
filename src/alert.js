define(function (require, exports, module) {

/**
 * 对话框
 *
 * @module Dialog
 */

'use strict';

var Dialog = require('./dialog');

/**
 * Alert
 * @class Alert
 * @extends Dialog
 * @constructor
 */
var Alert = Dialog.extend({

  defaults: {
    mask: true,
    data: {
      submit: '<span class="btn btn-primary">确定</span>',
      title: '提示'
    }
  },

  setup: function () {
    var self = this;

    self.initDelegates({
      'click [data-role=submit]': function (e) {
        e.preventDefault();
        this.fire('submit') && this.hide();
      }
    });

    if (!self.option('trigger')) {
      self.initEvents({
        hide: function (e) {
          this.destroy();
        }
      });
    }

    Alert.superclass.setup.apply(self);
  },

  submit: function (callback) {
    if (callback) {
      return this.on('submit', callback);
    } else {
      return this.fire('submit');
    }
  }

});

module.exports = Alert;

});
