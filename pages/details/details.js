var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    vertical:false,
    autoplay:true,
    interval:3000,
    duration:1200
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res){
        that.data.shoppingDetails = res.data.data;
        var goodsPicsInfo = [];
        var goodsPicsObj = {};
        var goodspic = res.data.data.goodspics;
        var goodspics = goodspic.substring(0, goodspic.length-1);
        var goodspicsArr = goodspics.split("#");
        for(var i=0;i<goodspicsArr.length;i++){
          goodsPicsInfo.push({
            "picurl":goodspicsArr[i]
          });
        }
        that.setData({
          goodsPicsInfo:goodsPicsInfo
        })

      }
    })
  },

})