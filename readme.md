# Dialog

[![Build Status](https://api.travis-ci.org/pandorajs/dialog.png?branch=master)](http://travis-ci.org/pandorajs/dialog)
[![Coverage Status](https://coveralls.io/repos/pandorajs/dialog/badge.png?branch=master)](https://coveralls.io/r/pandorajs/dialog?branch=master)


## Usage

```bash
npm install pandora-dialog -S
```

```js
var Dialog = require('pandora-dialog');

new Dialog({
  content : '我是一个弹窗，请点右上角关闭!'
});

new Dialog.Tips({
  content : '我是一个tips，我会自动消失!'
});

new Dialog.Confirm({
  content : '我是一个Confirm，请确认!'
});

new Dialog.Alert({
  content : '我是一个Alert，请确认!'
});
```
