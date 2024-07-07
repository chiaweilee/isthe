"use strict";(self.webpackChunkiscorrect=self.webpackChunkiscorrect||[]).push([[904],{11171:function(t,n,e){e.r(n),e.d(n,{demos:function(){return a}});var o=e(67294),r=e(68537),a={}},7375:function(t,n,e){e.r(n),e.d(n,{demos:function(){return a}});var o=e(67294),r=e(80876),a={}},65051:function(t,n,e){e.r(n),e.d(n,{demos:function(){return a}});var o=e(67294),r=e(81898),a={}},67932:function(t,n,e){e.r(n),e.d(n,{demos:function(){return _}});var o=e(15009),r=e.n(o),a=e(99289),u=e.n(a),c=e(67294),I=e(87674),_={"docs-library-cn-is-mobile-demo-0":{component:c.memo(c.lazy(u()(r()().mark(function i(){var l,s;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(847),e.e(59)]).then(e.bind(e,65059));case 2:return l=d.sent,s=l.default,d.abrupt("return",{default:function(){return c.createElement(s,null)}});case 5:case"end":return d.stop()}},i)})))),asset:null,context:void 0,renderOpts:void 0}}},42405:function(t,n,e){e.r(n),e.d(n,{demos:function(){return a}});var o=e(67294),r=e(34296),a={}},51446:function(t,n,e){e.r(n),e.d(n,{texts:function(){return r}});var o=e(68537);const r=[]},80472:function(t,n,e){e.r(n),e.d(n,{texts:function(){return r}});var o=e(80876);const r=[{value:"This is a library example.",paraId:0}]},8581:function(t,n,e){e.r(n),e.d(n,{texts:function(){return r}});var o=e(81898);const r=[{value:"sss",paraId:0}]},67109:function(t,n,e){e.r(n),e.d(n,{texts:function(){return r}});var o=e(87674);const r=[{value:`npm install iscorrect
`,paraId:0,tocIndex:0},{value:`import isMobileNo from 'iscorrect/cn/mobile';
isMobileNo('13333333333'); // { valid: true }
`,paraId:1,tocIndex:1},{value:"\u652F\u6301\u7A7A\u683C\u548C",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"\u7B26\u53F7",paraId:2,tocIndex:4},{value:`import isMobileNo from 'iscorrect/cn/mobile';

const {
  valid,
  formatted: { local },
} = isMobileNo('133-3333-3333');

console.log(valid); // true
console.log(local); // '13333333333'
`,paraId:3,tocIndex:4},{value:"\u5728\u6821\u9A8C\u7684\u540C\u65F6\u8FDB\u884C\u6570\u636E\u6E05\u6D17",paraId:4,tocIndex:5},{value:`import isMobileNo from 'iscorrect/cn/mobile';

function validateAndClean(mobileNo) {
  const { valid, formatted } = isMobileNo(mobileNo;
  if (valid) return formatted.local;
}

validateAndClean('133-3333-3333'); // '13333333333'
`,paraId:5,tocIndex:5},{value:"\u6CE8\uFF1A\u9ED8\u8BA4\u652F\u6301\u6240\u6709\u53F7\u6BB5",paraId:6,tocIndex:6},{value:"\u89C4\u5219",paraId:7,tocIndex:6},{value:"\u53F7\u6BB5",paraId:7,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:6},{value:"dataCard",paraId:7,tocIndex:6},{value:"\u4E0A\u7F51\u5361",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"virtualOperator",paraId:7,tocIndex:6},{value:"\u865A\u62DF\u8FD0\u8425\u5546",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"satellite",paraId:7,tocIndex:6},{value:"\u536B\u661F\u901A\u4FE1",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"internetOfThings",paraId:7,tocIndex:6},{value:"\u7269\u8054\u7F51",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:`import isMobileNo from 'iscorrect/cn/mobile';

isMobileNo('14000000000', {
  rules: {
    dataCard: true,
    virtualOperator: true,
    satellite: true,
    internetOfThings: true,
  },
});
`,paraId:8,tocIndex:6},{value:"\u4E2D\u56FD\u7535\u4FE1\u53F7\u6BB5 133\u3001149\u3001153\u3001173\u3001177\u3001180\u3001181\u3001189\u3001190\u3001191\u3001193\u3001199",paraId:9,tocIndex:7},{value:"\u4E2D\u56FD\u8054\u901A\u53F7\u6BB5 130\u3001131\u3001132\u3001145\u3001155\u3001156\u3001166\u3001167\u3001171\u3001175\u3001176\u3001185\u3001186\u3001196",paraId:9,tocIndex:7},{value:"\u4E2D\u56FD\u79FB\u52A8\u53F7\u6BB5 134(0-8)\u3001135\u3001136\u3001137\u3001138\u3001139\u30011440\u3001147\u3001148\u3001150\u3001151\u3001152\u3001157\u3001158\u3001159\u3001172\u3001178\u3001182\u3001183\u3001184\u3001187\u3001188\u3001195 [1]\u3001197\u3001198",paraId:9,tocIndex:7},{value:"\u4E2D\u56FD\u5E7F\u7535\u53F7\u6BB5 192",paraId:9,tocIndex:7},{value:`\u5176\u4ED6\u53F7\u6BB5
`,paraId:9,tocIndex:7},{value:"14 \u53F7\u6BB5\u90E8\u5206\u4E3A\u4E0A\u7F51\u5361\u4E13\u5C5E\u53F7\u6BB5\uFF1A\u4E2D\u56FD\u8054\u901A 145\uFF0C\u4E2D\u56FD\u79FB\u52A8 147\uFF0C\u4E2D\u56FD\u7535\u4FE1 149.",paraId:10,tocIndex:7},{value:`\u865A\u62DF\u8FD0\u8425\u5546\uFF1A
`,paraId:10,tocIndex:7},{value:"\u7535\u4FE1\uFF1A1700\u30011701\u30011702\u3001162",paraId:11,tocIndex:7},{value:`\u79FB\u52A8\uFF1A1703\u30011705\u30011706\u3001165
`,paraId:11,tocIndex:7},{value:"\u8054\u901A\uFF1A1704\u30011707\u30011708\u30011709\u3001171\u3001167",paraId:12,tocIndex:7},{value:"\u536B\u661F\u901A\u4FE1\uFF1A1349\u3001174",paraId:10,tocIndex:7},{value:"\u7269\u8054\u7F51\uFF1A140\u3001141\u3001144\u3001146\u3001148",paraId:10,tocIndex:7}]},87799:function(t,n,e){e.r(n),e.d(n,{texts:function(){return r}});var o=e(34296);const r=[{value:"This is a overview example.",paraId:0}]}}]);
