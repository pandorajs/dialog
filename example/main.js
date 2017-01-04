'use strict';

var Dialog = require('../src/index');
var $ = require('jquery');

require('../src/dialog.less');

$('#demo1').click(function(){
  new Dialog({
 importStyle : true,
 content : '我是一个弹窗，请点右上角关闭!'
  });
});

$('#demo2').click(function(){
  new Dialog.Tips({
 content : '我是一个tips，我会自动消失!'
  });
});

$('#demo3').click(function(){
  new Dialog.Confirm({
 content : '我是一个Confirm，请确认!'
  });
});

 $('#demo4').click(function(){
  new Dialog.Alert({
 content : '我是一个Alert，请确认!'
  });
});
