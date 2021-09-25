// pages/kj/RandomSum/index.js
var rand,sum;
function createRand() {
  rand = []; 
  for (var i = 0; i < 7; i++) {
    var r = (Math.random() * 31).toFixed(0)*1;
    rand.push(r);
    console.log(rand[i]); 
  }
  console.log(sum);  
};

Page({
  onLoad: function() {
    createRand(); 
    this.setData({
      rand: rand,
    })
  },
  newRand: function() {
    createRand();
    this.setData({
      rand: rand,
    })
  }
  /**电科19-1刘浩 201923010117 */
})