
  /**
   * 对话框
   *
   * @module Dialog
   */

  'use strict';

  var Dialog = require('./dialog');

  /**
   * Confirm
   * 确认弹窗
   *
   * @class Confirm
   * @extends Dialog
   * @constructor
   */
  var Confirm = Dialog.extend({

    defaults: {
      /**
       * 是否显示遮罩层
       *
       * @attribute mask
       * @default true
       * @type {Boolean}
       */
      mask: true,
      data: {
        /**
         * 自定义取消操作按钮
         *
         * @attribute data.cancel
         * @default <span class="btn btn-default">取消</span>
         * @type {String}
         */
        cancel: '<span class="btn btn-default">取消</span>',

        /**
         * 自定义确认操作按钮
         *
         * @attribute data.submit
         * @default <span class="btn btn-primary">确定</span>
         * @type {String}
         */
        submit: '<span class="btn btn-primary">确定</span>',

        /**
         * 标题
         *
         * @attribute data.title
         * @default 确认
         * @type {String}
         */
        title: '确认'
      },
      delegates: {
        'click [data-role=submit]': function() {
          this.submit();
        },
        'click [data-role=cancel]': function() {
          this.cancel();
        }
      }
    },

    setup: function() {
      var self = this;

      if (!self.option('trigger')) {
        self.hide(function() {
          this.destroy();
        });
      }

      Confirm.superclass.setup.apply(self);
    },

    /**
     * 确定或绑定确定事件回调
     *
     * @param {Function} [callback] 事件回调函数
     * @method submit
     */
    submit: function(callback) {
      if (callback) {
        return this.on('submit', callback);
      } else {
        /**
         * 确定事件
         *
         * @event submit
         * @param {object} e Event.
         */
        if (this.fire('submit')) {
          this.close();
        }
      }
    },

    /**
     * 取消或绑定取消事件回调
     *
     * @param {Function} [callback] 事件回调函数
     * @method cancel
     */
    cancel: function(callback) {
      if (callback) {
        return this.on('cancel', callback);
      } else {
        /**
         * 取消事件
         *
         * @event cancel
         * @param {object} e Event.
         */
        if (this.fire('cancel')) {
          this.close();
        }
      }
    }

  });

  module.exports = Confirm;

