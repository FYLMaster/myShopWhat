//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    vartical:false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden:false
  },

  swiperchange:function(e){
    e.detail.current
  },

  onLoad:function(){
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
      method:'get',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:function(res){
        that.setData({
          images:res.data
        })
      }
    })

    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
      method: 'get',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          venuesItems: res.data.data
        })
        setTimeout(function(){
          that.setData({
            loadingHidden:true
          })
        },1500)
      }
    })

    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
      method: 'get',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          choiceItems: res.data.data.dataList
        })
        setTimeout(function () {
          that.setData({
            loadingHidden: true
          })
        }, 1500)
      }
    })
  }
})