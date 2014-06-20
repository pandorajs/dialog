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
      'click [data-role=close]': 'close'
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
   * 点击关闭按钮
   *
   * @method close
   */
  close: function () {
    this.fire('close') !== false && this.hide();

    return this;
  },

  /**
   * 显示对话框
   *
   * @method show
   */
  // show: function () {
  //   this.mask && this.mask.show();

  //   Dialog.superclass.show.apply(this);

  //   return this;
  // },

  /**
   * 隐藏对话框
   *
   * @method hide
   */
  // hide: function () {
  //   this.mask && this.mask.hide();

  //   Dialog.superclass.hide.apply(this);

  //   return this;
  // },

  render: function () {
    var self = this;

    dialogLocker.set(self.uniqueId, self);

    Dialog.superclass.render.apply(self);

    // 遮罩层
    if (self.option('mask') && !self.mask) {
      self.mask = new Mask({
        baseElement: self.option('baseElement'),
        container: self.element,
        // css: {
        //   position: self.option('css/position')
        // },
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
   * 销毁
   *
   * @method destroy
   */
  destroy: function () {
    var nextDialog;

    // 先销毁遮罩层
    this.mask && this.mask.destroy();

    dialogLocker.remove(this.uniqueId);

    if (dialogInTop === this) {
      dialogInTop = null;
      if (dialogLocker.length()) {
        nextDialog = dialogLocker.last();
        if (nextDialog) {
          nextDialog.focus();
        }
      }
    }

    Dialog.superclass.destroy.apply(this);
  }

});

// Dialog.STATE = {
//   INITIAL: -1,
//   READY: 0,
//   VISIBLE: 1,
//   HIDDEN: 2
// };

module.exports = Dialog;

});
