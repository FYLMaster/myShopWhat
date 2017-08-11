var app = getApp()
Page({
  data:{

  },
  onLoad:function(options){
    var that = this
    wx.request({
      url: 'http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType?id=' + options.id,
      der: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          brandList: res.data.data
        });
      }
    })
  }
})