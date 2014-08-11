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

// 样式表
var importStyle = require('./dialog.css'),
  styleImported;

// 当前位于顶层的 dialog
var dialogLocker = new Locker(),
    dialogInTop;

function handleDialogInTop (dialog, destroy) {
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
  if (!destroy) {
    dialogLocker.set(dialog.uniqueId, dialog, 0);
  }
}

/**
 * Dialog
 * 对话框
 *
 * @class Dialog
 * @extends Overlay
 * @constructor
 */
var Dialog = Overlay.extend({

  defaults: {
    baseXY: {
      x: 0.5
    },
    /**
     * 样式前缀
     *
     * @attribute classPrefix
     * @default ue-dialog
     * @type {String}
     */
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
        (e.keyCode === 27) && this.close();
      },
      'mousedown': function () {
        this.focus(true);
      },
      'click [data-role=close]': function () {
        this.close();
      }
    },

    /**
     * 是否模拟为模态对话框，即显示遮罩层
     *
     * @attribute mask
     * @default false
     * @type {Boolean}
     */
    mask: false,

    /**
     * 位置偏移，单位为像素
     *
     * @attribute offset
     * @default {x:0,y:70}
     * @type Object
     */
    offset: {
      y: 70
    },
    selfXY: {
      x: 0.5
    },
    // 对话框模板
    template: require('./dialog.handlebars'),
    // 对话框触发点
    trigger: null,
    importStyle: false
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

    if (this.option('importStyle') && !styleImported) {
      importStyle();
      styleImported = true;
    }

    Dialog.superclass.setup.apply(self);
  },

  /**
   * 设置zIndex
   *
   * @method setIndex
   * @param {Number} [index] 增加值
   * @private
   * @chainable
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
   * @param {Boolean} [fromMousedown] 是否通过鼠标获取焦点
   * @chainable
   */
  focus: function (fromMousedown) {
    var autofocus;

    if (dialogInTop) {
      dialogInTop.setIndex();
    }

    dialogInTop = this.setIndex(1);

    if (!fromMousedown) {
      autofocus = this.$('[autofocus]');
      autofocus.length ? autofocus.focus() : this.element.focus();
    }

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
      /**
       * 通知关闭事件
       *
       * @event close
       * @param {object} e Event.
       */
      if (this.fire('close') !== false) {
        this.hide();
        handleDialogInTop(this, false);
      }
    }
  },

  /**
   * 初始化遮罩信息
   *
   * @method initMask
   * @private
   */
  initMask: function () {
    var self = this;

    // 遮罩层
    if (self.option('mask') && !self.mask) {
      self.mask = new Mask({
        autoShow: self.option('effect') === 'none',
        baseElement: self.option('baseElement'),
        container: self.element,
        delegates: {
          'keydown': function (e) {
            (e.keyCode === 27) && self.close();
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

      self.show(function () {
          this.mask && this.mask.show();
        }).hide(function () {
          this.mask && this.mask.hide();
        });
    }
  },

  render: function () {
    var self = this;

    dialogLocker.set(self.uniqueId, self);

    Dialog.superclass.render.apply(self);

    self.initMask();

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
