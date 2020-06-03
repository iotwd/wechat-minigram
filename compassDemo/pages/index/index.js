//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotate: 0,
    degree: '未知',
    direction: '',
    longtitude: '',
    latitude: '',
    city: '',
    province:'',
    altitude: ''

  },
  /**
   * 自定义函数--获取城市
   */
  getCity: function (longtitude, latitude) {
    var that=this
    // 获取地址
    wx.request({
      url: 'https://restapi.amap.com/v3/geocode/regeo?output=json&location=' + longtitude + ',' + latitude + '&key=cfe04330ab688ba955f75cec651eccc3&radius=1000&extensions=all',
      success: function (res) {
        var cityInfo=res.data.regeocode.addressComponent
        that.setData({
          city:cityInfo.city,
          province: cityInfo.province
        })
      }
    })

  },
  /**
   * 自定义函数--获取方向
   */
  getDirection: function(degree) {
    let dir = '未知'
    if (degree >= 340 || degree <= 20) {
      dir = '北'
    } else if (degree > 20 && degree <= 70) {
      dir = '东北'
    } else if (degree > 70 && degree <= 110) {
      dir = '东'
    } else if (degree > 110 && degree <= 160) {
      dir = '东南'
    } else if (degree > 160 && degree <= 200) {
      dir = '南'
    } else if (degree > 200 && degree <= 250) {
      dir = '西南'
    } else if (degree > 250 && degree <= 290) {
      dir = '西'
    } else if (degree > 290 && degree <= 340) {
      dir = '西北'
    }

    this.setData({
      direction: dir
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // 获取指南针方向
    wx.onCompassChange(function(res) {
      var degree = res.direction.toFixed(0)
      //获取方向
      that.getDirection(degree)
      that.setData({
        degree:degree,
        rotate: 360 - degree
      })
      // 如果是整度数震动一下
      if (degree % 45 == 0) {
        wx.vibrateLong()
      }
    })
    // 获取位置信息
    wx.getLocation({
      altitude: true,
      success: function(res) {
        that.getCity(res.longitude, res.latitude)
        console.log(res)
        // 将位置信息更新到data数据中
        that.setData({
          latitude: res.latitude.toFixed(4),
          longtitude: res.longitude.toFixed(4),
          altitude: res.altitude.toFixed(0)
        })
      },
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})