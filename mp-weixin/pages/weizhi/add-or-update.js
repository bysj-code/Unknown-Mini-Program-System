(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/weizhi/add-or-update"],{"3b39":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,i,n,r,a,u){try{var o=e[a](u),s=o.value}catch(c){return void i(c)}o.done?t(s):Promise.resolve(s).then(n,r)}function u(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var u=e.apply(t,i);function o(e){a(u,n,r,o,s,"next",e)}function s(e){a(u,n,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("38bd"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{biaoti:"",leixing:"",jiage:"",neirong:"",fabushijian:"",fengmian:""},leixingOptions:[],leixingIndex:0,user:{},ro:{biaoti:!1,leixing:!1,jiage:!1,neirong:!1,fabushijian:!1,fengmian:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=u(n.default.mark((function t(i){var r,a,u,o;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDate(),r=e.getStorageSync("nowTable"),t.next=4,this.$api.session(r);case 4:return a=t.sent,this.user=a.data,t.next=8,this.$api.option("leixingxinxi","leixingxinxi",{});case 8:if(a=t.sent,this.leixingOptions=a.data,this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){t.next=18;break}return this.ruleForm.id=i.id,t.next=16,this.$api.info("weizhi",this.ruleForm.id);case 16:a=t.sent,this.ruleForm=a.data;case 18:if(!i.cross){t.next=57;break}u=e.getStorageSync("crossObj"),t.t0=n.default.keys(u);case 21:if((t.t1=t.t0()).done){t.next=57;break}if(o=t.t1.value,"biaoti"!=o){t.next=27;break}return this.ruleForm.biaoti=u[o],this.ro.biaoti=!0,t.abrupt("continue",21);case 27:if("leixing"!=o){t.next=31;break}return this.ruleForm.leixing=u[o],this.ro.leixing=!0,t.abrupt("continue",21);case 31:if("jiage"!=o){t.next=35;break}return this.ruleForm.jiage=u[o],this.ro.jiage=!0,t.abrupt("continue",21);case 35:if("neirong"!=o){t.next=39;break}return this.ruleForm.neirong=u[o],this.ro.neirong=!0,t.abrupt("continue",21);case 39:if("fabushijian"!=o){t.next=43;break}return this.ruleForm.fabushijian=u[o],this.ro.fabushijian=!0,t.abrupt("continue",21);case 43:if("fengmian"!=o){t.next=47;break}return this.ruleForm.fengmian=u[o],this.ro.fengmian=!0,t.abrupt("continue",21);case 47:if("clicktime"!=o){t.next=51;break}return this.ruleForm.clicktime=u[o],this.ro.clicktime=!0,t.abrupt("continue",21);case 51:if("clicknum"!=o){t.next=55;break}return this.ruleForm.clicknum=u[o],this.ro.clicknum=!0,t.abrupt("continue",21);case 55:t.next=21;break;case 57:this.styleChange();case 58:case"end":return t.stop()}}),t,this)})));function i(e){return t.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(e){this.ruleForm.fabushijian=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},leixingChange:function(e){this.leixingIndex=e.target.value,this.ruleForm.leixing=this.leixingOptions[this.leixingIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.fengmian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.biaoti){e.next=3;break}return this.$utils.msg("标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.jiage){e.next=6;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.jiage||this.$validate.isIntNumer(this.ruleForm.jiage)){e.next=9;break}return this.$utils.msg("价格应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=12;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.id){e.next=17;break}return e.next=15,this.$api.update("weizhi",this.ruleForm);case 15:e.next=19;break;case 17:return e.next=19,this.$api.add("weizhi",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(i,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,i("543d")["default"])},"5b70":function(e,t,i){},"9ea0":function(e,t,i){"use strict";(function(e){i("d9b1"),i("921b");n(i("66fd"));var t=n(i("a8ff"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},a8ff:function(e,t,i){"use strict";i.r(t);var n=i("fe89"),r=i("b87e");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("c852");var u,o=i("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"27809c9d",null,!1,n["a"],u);t["default"]=s.exports},b87e:function(e,t,i){"use strict";i.r(t);var n=i("3b39"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},c852:function(e,t,i){"use strict";var n=i("5b70"),r=i.n(n);r.a},fe89:function(e,t,i){"use strict";var n={"w-picker":function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"38bd"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))}},[["9ea0","common/runtime","common/vendor"]]]);