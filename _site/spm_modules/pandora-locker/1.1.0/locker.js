
/**
 * 储物柜
 * @module Locker
 */

'use strict';

var prefix = 'LKR-';

/**
 * 储物柜
 * @class Locker
 * @constructor
 */
var Locker = function () {
  this.empty();
};

Locker.prototype = {

  /**
   * 从储物柜中取得指定对象，参数key未指定则返回全部
   * @param {mix} [key] 对象key
   * @method get
   * @return {mixed} 返回key对应的对象，key未指定则返回全部，有指定但未找到则返回null
   */
  get: function (key) {
    if (typeof key !== 'undefined') {
      key = prefix + key;
      if (this.stacks.hasOwnProperty(key)) {
        return this.stacks[key];
      }
      return null;
    }
    return this.stacks;
  },

  /**
   * 将对象存入储物柜
   * @param {string} key 对象key
   * @param {object} obj 对象
   * @param {number} [index] 插入的位置
   * @method set
   */
  set: function (key, obj, index) {
    this.stacks[prefix + key] = obj;

    if (this.keys.indexOf(key) === -1) {
      if (typeof index !== 'undefined') {
       this.keys.splice(index, 0, key);
      } else {
       this.keys.push(key);
      }
    }
  },

  /**
   * 从储物柜中删除指定对象
   * @param {string} key 对象key
   * @method remove
   */
  remove: function (key) {
    if (key !== '') {
      delete this.stacks[prefix + key];

      this.keys.splice(this.keys.indexOf(key), 1);
    }
  },

  /**
   * 清空储物柜
   * @method empty
   */
  empty: function () {
    this.stacks = {};
    this.keys = [];
  },

  /**
   * 物品数量
   * @method length
   * @return {Number} 返回物品数量
   */
  length: function () {
    return this.keys.length;
  },

  /**
   * 第一个物品
   * @method first
   * @return {mixed} 返回第一个物品
   */
  first: function () {
    return this.get(this.keys[0]);
  },

  /**
   * 最后一个物品
   * @method last
   * @return {mixed} 返回最后一个物品
   */
  last: function () {
    return this.get(this.keys[this.length() - 1]);
  }

};

return Locker;

