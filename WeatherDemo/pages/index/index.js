//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市', '北京市', '海淀区'],
    weather: {
      daily_forecast: [{
          cond_code_d: "999"
        },
        {
          cond_code_d: "999"
        },
        {
          cond_code_d: "999"
        }
      ]

    },
  },
  /**
   * 自定义函数--地区改变监听
   */
  regionChange: function(e) {
    this.setData({
      region: e.detail.value
    });

    // 更新天气
    this.getWeather()

  },
  /**
   * 自定义函数--获取天气信息
   */
  getWeather: function() {
    let that = this

    // 发起请求
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/',
      data: {
        location: that.data.region[1],
        key: '5815ba82cb32400191930a302ba3d2d2'

      },
      success: function(res) {
        let weather = res.data.HeWeather6[0]
        that.setData({
          weather: weather
        })
        console.log(weather)
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 更新天气
    this.getWeather()
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