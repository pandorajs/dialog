"use strict";
var __cov_vY1RoxuEewKJkp0aSXM0KQ = (Function('return this'))();
if (!__cov_vY1RoxuEewKJkp0aSXM0KQ.__coverage__) { __cov_vY1RoxuEewKJkp0aSXM0KQ.__coverage__ = {}; }
__cov_vY1RoxuEewKJkp0aSXM0KQ = __cov_vY1RoxuEewKJkp0aSXM0KQ.__coverage__;
if (!(__cov_vY1RoxuEewKJkp0aSXM0KQ['E:\\cms3\\v3\\spm3\\dialog\\lib\\mask.js'])) {
   __cov_vY1RoxuEewKJkp0aSXM0KQ['E:\\cms3\\v3\\spm3\\dialog\\lib\\mask.js'] = {"path":"E:\\cms3\\v3\\spm3\\dialog\\lib\\mask.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":1,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":44,"loc":{"start":{"line":44,"column":11},"end":{"line":44,"column":22}}},"2":{"name":"(anonymous_2)","line":71,"loc":{"start":{"line":71,"column":17},"end":{"line":71,"column":28}}},"3":{"name":"resize","line":75,"loc":{"start":{"line":75,"column":6},"end":{"line":75,"column":24}}},"4":{"name":"(anonymous_4)","line":100,"loc":{"start":{"line":100,"column":13},"end":{"line":100,"column":24}}}},"statementMap":{"1":{"start":{"line":10,"column":2},"end":{"line":11,"column":41}},"2":{"start":{"line":21,"column":2},"end":{"line":106,"column":5}},"3":{"start":{"line":45,"column":6},"end":{"line":46,"column":49}},"4":{"start":{"line":48,"column":6},"end":{"line":50,"column":7}},"5":{"start":{"line":49,"column":8},"end":{"line":49,"column":42}},"6":{"start":{"line":53,"column":6},"end":{"line":61,"column":7}},"7":{"start":{"line":54,"column":8},"end":{"line":60,"column":34}},"8":{"start":{"line":63,"column":6},"end":{"line":63,"column":40}},"9":{"start":{"line":72,"column":6},"end":{"line":73,"column":39}},"10":{"start":{"line":75,"column":6},"end":{"line":85,"column":7}},"11":{"start":{"line":76,"column":8},"end":{"line":84,"column":13}},"12":{"start":{"line":87,"column":6},"end":{"line":95,"column":7}},"13":{"start":{"line":88,"column":8},"end":{"line":90,"column":9}},"14":{"start":{"line":89,"column":10},"end":{"line":89,"column":41}},"15":{"start":{"line":92,"column":8},"end":{"line":92,"column":17}},"16":{"start":{"line":94,"column":8},"end":{"line":94,"column":64}},"17":{"start":{"line":97,"column":6},"end":{"line":97,"column":46}},"18":{"start":{"line":101,"column":6},"end":{"line":101,"column":55}},"19":{"start":{"line":103,"column":6},"end":{"line":103,"column":42}},"20":{"start":{"line":108,"column":2},"end":{"line":108,"column":24}}},"branchMap":{"1":{"line":34,"type":"cond-expr","locations":[{"start":{"line":34,"column":71},"end":{"line":34,"column":81}},{"start":{"line":34,"column":84},"end":{"line":34,"column":91}}]},"2":{"line":34,"type":"binary-expr","locations":[{"start":{"line":34,"column":19},"end":{"line":34,"column":41}},{"start":{"line":34,"column":45},"end":{"line":34,"column":67}}]},"3":{"line":48,"type":"if","locations":[{"start":{"line":48,"column":6},"end":{"line":48,"column":6}},{"start":{"line":48,"column":6},"end":{"line":48,"column":6}}]},"4":{"line":53,"type":"if","locations":[{"start":{"line":53,"column":6},"end":{"line":53,"column":6}},{"start":{"line":53,"column":6},"end":{"line":53,"column":6}}]},"5":{"line":53,"type":"binary-expr","locations":[{"start":{"line":53,"column":10},"end":{"line":53,"column":32}},{"start":{"line":53,"column":36},"end":{"line":53,"column":58}}]},"6":{"line":87,"type":"if","locations":[{"start":{"line":87,"column":6},"end":{"line":87,"column":6}},{"start":{"line":87,"column":6},"end":{"line":87,"column":6}}]},"7":{"line":88,"type":"if","locations":[{"start":{"line":88,"column":8},"end":{"line":88,"column":8}},{"start":{"line":88,"column":8},"end":{"line":88,"column":8}}]}}};
}
__cov_vY1RoxuEewKJkp0aSXM0KQ = __cov_vY1RoxuEewKJkp0aSXM0KQ['E:\\cms3\\v3\\spm3\\dialog\\lib\\mask.js'];
__cov_vY1RoxuEewKJkp0aSXM0KQ.s['1']++;var $=require('jquery'),Overlay=require('pandora-overlay');__cov_vY1RoxuEewKJkp0aSXM0KQ.s['2']++;var Mask=Overlay.extend({defaults:{autoShow:false,css:{position:(__cov_vY1RoxuEewKJkp0aSXM0KQ.b['2'][0]++,!!window.ActiveXObject)&&(__cov_vY1RoxuEewKJkp0aSXM0KQ.b['2'][1]++,!window.XMLHttpRequest)?(__cov_vY1RoxuEewKJkp0aSXM0KQ.b['1'][0]++,'absolute'):(__cov_vY1RoxuEewKJkp0aSXM0KQ.b['1'][1]++,'fixed'),left:0,top:0,width:'100%',height:'100%',background:'#000',opacity:0.2}},setup:function(){__cov_vY1RoxuEewKJkp0aSXM0KQ.f['1']++;__cov_vY1RoxuEewKJkp0aSXM0KQ.s['3']++;var self=this,baseElement=self.option('baseElement');__cov_vY1RoxuEewKJkp0aSXM0KQ.s['4']++;if(baseElement){__cov_vY1RoxuEewKJkp0aSXM0KQ.b['3'][0]++;__cov_vY1RoxuEewKJkp0aSXM0KQ.s['5']++;self.baseElement=$(baseElement);}else{__cov_vY1RoxuEewKJkp0aSXM0KQ.b['3'][1]++;}__cov_vY1RoxuEewKJkp0aSXM0KQ.s['6']++;if((__cov_vY1RoxuEewKJkp0aSXM0KQ.b['5'][0]++,!!window.ActiveXObject)&&(__cov_vY1RoxuEewKJkp0aSXM0KQ.b['5'][1]++,!window.XMLHttpRequest)){__cov_vY1RoxuEewKJkp0aSXM0KQ.b['4'][0]++;__cov_vY1RoxuEewKJkp0aSXM0KQ.s['7']++;$('<iframe src="about:blank"></iframe>').css({width:'100%',height:'100%',opacity:0}).appendTo(self.element);}else{__cov_vY1RoxuEewKJkp0aSXM0KQ.b['4'][1]++;}__cov_vY1RoxuEewKJkp0aSXM0KQ.s['8']++;Mask.superclass.setup.apply(self);},setPosition:function(){__cov_vY1RoxuEewKJkp0aSXM0KQ.f['2']++;__cov_vY1RoxuEewKJkp0aSXM0KQ.s['9']++;var self=this,baseElement=self.baseElement;function resize(){__cov_vY1RoxuEewKJkp0aSXM0KQ.f['3']++;__cov_vY1RoxuEewKJkp0aSXM0KQ.s['11']++;self.element.css({width:0,height:0}).css({width:baseElement.outerWidth(),height:baseElement.outerHeight()});}__cov_vY1RoxuEewKJkp0aSXM0KQ.s['12']++;if(self.option('css/position')!=='fixed'){__cov_vY1RoxuEewKJkp0aSXM0KQ.b['6'][0]++;__cov_vY1RoxuEewKJkp0aSXM0KQ.s['13']++;if(!baseElement){__cov_vY1RoxuEewKJkp0aSXM0KQ.b['7'][0]++;__cov_vY1RoxuEewKJkp0aSXM0KQ.s['14']++;baseElement=$(self.document);}else{__cov_vY1RoxuEewKJkp0aSXM0KQ.b['7'][1]++;}__cov_vY1RoxuEewKJkp0aSXM0KQ.s['15']++;resize();__cov_vY1RoxuEewKJkp0aSXM0KQ.s['16']++;$(self.viewport).on('resize'+self.delegateNS,resize);}else{__cov_vY1RoxuEewKJkp0aSXM0KQ.b['6'][1]++;}__cov_vY1RoxuEewKJkp0aSXM0KQ.s['17']++;Mask.superclass.setPosition.apply(self);},destroy:function(){__cov_vY1RoxuEewKJkp0aSXM0KQ.f['4']++;__cov_vY1RoxuEewKJkp0aSXM0KQ.s['18']++;$(this.viewport).off('resize'+this.delegateNS);__cov_vY1RoxuEewKJkp0aSXM0KQ.s['19']++;Mask.superclass.destroy.apply(this);}});__cov_vY1RoxuEewKJkp0aSXM0KQ.s['20']++;module.exports=Mask;
