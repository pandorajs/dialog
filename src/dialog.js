define(function (require, exports, module) {

/**
 * 对话框
 * @module Dialog
 */

'use strict';

var Overlay = require('overlay'),
  Locker = require('locker');

// 遮罩层
var Mask = require('./mask');

// 当前位于顶层的 dialog
var dialogLocker = new Locker(),
  dialogInTop;

function handleDialogInTop (dialog, remove) {
  var nextDialog;

  // 先移除
  dialogLocker.remove(dialog.uniqueId);

  if (dialogInTop === dialog) {
    dialogInTop = null;
    if (dialogLocker.length()) {
      nextDialog = dialogLocker.last();
      nextDialog && nextDialog.focus && nextDialog.focus();
    }
  }

  // 再添加
  if (!remove) {
    dialogLocker.set(dialog.uniqueId, dialog);
  }
}

/**
 * Dialog
 *
 * @class Dialog
 * @constructor
 */
var Dialog = Overlay.extend({

  defaults: {
    baseXY: {
      x: 0.5
    },
    // 样式前缀
    classPrefix: 'ue-dialog',
    css: {
      position: (!!window.ActiveXObject && !window.XMLHttpRequest) ? 'absolute' : 'fixed'
    },
    data: {
      // 关闭
      close: '&times;'
    },
    // 事件代理
    delegates: {
      'keydown': function (e) {
        (e.keyCode === 27) && this.hide();
      },
      'mousedown': 'focus',
      'click [data-role=close]': function () {
        this.close();
      }
    },
    // 是否模拟为模态对话框，即显示遮罩层
    mask: false,
    offset: {
      y: 70
    },
    selfXY: {
      x: 0.5
    },
    // 对话框模板
    template: require('./dialog.handlebars'),
    // 对话框触发点
    trigger: null
  },

  setup: function () {
    var self = this,
      title = self.option('title'),
      content = self.option('content');

    content && self.data({
      content: content
    });

    title && self.data({
      title: title
    });

    self.on('hide', function () {
      handleDialogInTop(this, false);
    });

    Dialog.superclass.setup.apply(self);
  },

  /**
   * 设置zIndex
   *
   * @method setIndex
   * @param {Number} [index] zIndex
   */
  setIndex: function (index) {
    this.element.css({
      zIndex: +this.option('css/zIndex') + (index || 0)
    });

    if (index) {
      this.element.addClass('focused');
    } else {
      this.element.removeClass('focused');
    }

    return this;
  },

  /**
   * 设置位置
   *
   * @method setPosition
   */
  setPosition: function () {
    this.mask && this.mask.setPosition();

    Dialog.superclass.setPosition.apply(this);
  },

  /**
   * 设置焦点
   *
   * @method focus
   */
  focus: function () {
    if (dialogInTop) {
      dialogInTop.setIndex();
    }

    dialogInTop = this.setIndex(1);

    return this;
  },

  /**
   * 点击关闭按钮，或绑定关闭事件回调
   *
   * @param {Function} [callback] 事件回调函数
   * @method close
   */
  close: function (callback) {
    if (callback) {
      return this.on('close', callback);
    } else {
      return this.fire('close') !== false && this.hide();
    }
  },

  render: function () {
    var self = this;

    dialogLocker.set(self.uniqueId, self);

    Dialog.superclass.render.apply(self);

    // 遮罩层
    if (self.option('mask') && !self.mask) {
      self.mask = new Mask({
        baseElement: self.option('baseElement'),
        container: self.element,
        delegates: {
          'keydown': function (e) {
            (e.keyCode === 27) && self.hide();
          },
          'click': function (e) {
            self.stop()
              .animate({
                left: '-=10'
              }, 40)
              .animate({
                left: '+=20'
              }, 80)
              .animate({
                left: '-=20'
              }, 80)
              .animate({
                left: '+=10'
              }, 40);
          }
        },
        effect: self.option('effect'),
        insert: function () {
          this.container.before(this.element);
        }
      });

      self.initEvents({
        show: function () {
          self.mask && self.mask.show();
        },
        hide: function () {
          self.mask && self.mask.hide();
        }
      });
    }

    self.focus();

    return self;
  },

  /**
   * 销毁，或绑定销毁事件回调
   *
   * @param {Function} [callback] 事件回调函数
   * @method destroy
   */
  destroy: function (callback) {
    if (callback) {
      return this.on('destroy', callback);
    }

    // 先销毁遮罩层
    this.mask && this.mask.destroy();

    handleDialogInTop(this, true);

    Dialog.superclass.destroy.apply(this);
  }

});

module.exports = Dialog;

});
