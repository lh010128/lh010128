// pages/kj/ForAndSum/index.js
var start, end, sum; //定义起点数、终点数和求和结果三个全局变量
Page({ /**
  * 页面的初始数据
  */ data: {
   flag: true,
   name: '',
   P: '',
   IR: '',
   AP: '',
   I:'',
   PANDI:''
 },

 nameInput: function (e) {
   this.setData({
     name: e.detail.value
   });
 },
 PInput: function (e) {
   this.setData({
     P: e.detail.value
   });
 },
 IRInput: function (e) {
   this.setData({
     IR: e.detail.value
   });
 },
 AP: function (e) {
   this.setData({
     AP: e.detail.value
   });
 },

 mysubmit: function () {
     var benjin =parseFloat(this.P);
     var lilv = parseFloat(this.data.IR);
     var lixi = 0;
     for(var i = 1;i <= this.AP; i++  ){
       lixi += benjin*lilv;
       benjin = benjin + lixi;
     }
     benjin = benjin.toFixed(2);
     lixi = lixi.toFixed(2);
     this.setData({
       PANDI: benjin, 
       I: lixi,
       flag: false
     });
   }
 }
 /**电科19-1 刘浩201923010117**/
)
