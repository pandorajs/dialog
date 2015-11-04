# Demo

---

## Normal usage

<button id="demo1" type="button">点我弹出Dialog</button>

```javascript
var Dialog = require('pandora-dialog');
new Dialog({
	content : 'hi mssk!'
});


```
<button id="demo2" type="button">点我弹出Tips</button>


```javascript
var Tips = require('pandora-dialog').Tips;
new Tips({
	content : '我是一个tips，我会自动消失!'
});

```
<button id="demo3" type="button">点我弹出confirm</button>

```javascript
var Confirm = require('pandora-dialog').Confirm;
new Confirm({
	content : '我是一个Confirm，请确认!',
	events : {
     'submit' : function(){
        //点确定执行这里
     },
     'cancel' : function(){
       //点取消执行这里
     }
    }
});

```
<button id="demo4" type="button">点我弹出Alert</button>

```javascript
var Alert = require('pandora-dialog').Alert;
new Alert({
	content : '我是一个Alert，请确认!',
	events : {
     'submit' : function(){
        //点确定执行这里
     }
    }
});

```


<script>
 seajs.use(['jquery','dialog'],function($,Dialog){
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
 });
</script>