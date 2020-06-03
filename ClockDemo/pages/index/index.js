//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h: 0,
    m: 0,
    s: 0
  },
  /**
   * 自定义函数--绘制时钟
   */
  getTime: function() {
    let currentTime = new Date()



    let time = []
    time[0] = currentTime.getHours()
    time[1] = currentTime.getMinutes()
    time[2] = currentTime.getSeconds()
    if (time[0] > 12) {
      time[0] -= 12
    }

    return time
  },


  /**
   * 自定义函数--绘制时钟
   */
  drawClock: function() {

    var ctx = this.ctx
    // 更换画笔填充颜色
    ctx.fillStyle = 'red'

    let width = 300,
      height = 300
    // 设置画布中心点为参照点
    ctx.translate(width / 2, height / 2)
    // 将画布逆时针旋转90度
    ctx.rotate(-Math.PI / 2)

    // 绘制时钟刻度
    /* 绘制小时刻度,设置线条粗细和末端样式 */
    ctx.lineWidth = 4
    ctx.lineCap = "round"
    for (let i = 0; i < 12; i++) {
      /*开始路径 */
      ctx.beginPath()

      ctx.moveTo(100, 0)
      ctx.lineTo(120, 0)
      ctx.stroke()
      // 旋转30度
      ctx.rotate(Math.PI / 6)
    }

    /* 绘制小时刻度,设置线条粗细和末端样式 */
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    for (let i = 0; i < 60; i++) {

      /*开始路径 */
      ctx.beginPath()

      ctx.moveTo(115, 0)
      ctx.lineTo(120, 0)
      ctx.stroke()
      // 旋转30度
      ctx.rotate(Math.PI / 30)
    }
    /* 绘制时针 角度= Math.PI/6 * h + Math.PI/360*m+Math.PI/21600*s*/
    // 获取时间
    let time = this.getTime()

    let h = time[0]
    let m = time[1]
    let s = time[2]
    // 换算角度
    let hourAngle = Math.PI / 6 * h + Math.PI / 360 * m + Math.PI / 21600 * s
    // 绘制时针
    // 保存当前的绘图状态
    ctx.save()
    ctx.lineWidth = 6
    ctx.rotate(hourAngle)
    // 先旋转角度再进行绘制,最后恢复保存状态
    ctx.beginPath()
    ctx.moveTo(-20, 0)
    ctx.lineTo(60, 0)
    ctx.stroke()

    // 恢复保存状态
    ctx.restore()
    // 绘制分针
    let minuteAngle = Math.PI / 60 * m + Math.PI / 1800 * s

    // 保存当前的绘图状态
    ctx.save()
    ctx.lineWidth = 5
    ctx.rotate(minuteAngle)
    // 先旋转角度再进行绘制,最后恢复保存状态
    ctx.beginPath()
    ctx.moveTo(-20, 0)
    ctx.lineTo(80, 0)
    ctx.stroke()

    // 恢复保存状态
    ctx.restore()
    // 绘制秒针
    let secondAngle = Math.PI / 30 * s

    // 保存当前的绘图状态
    ctx.save()
    ctx.lineWidth = 4
    ctx.rotate(secondAngle)
    ctx.strokeStyle = 'red'
    // 先旋转角度再进行绘制,最后恢复保存状态
    ctx.beginPath()
    ctx.moveTo(-30, 0)
    ctx.lineTo(100, 0)
    ctx.stroke()
    // 恢复保存状态
    ctx.restore()
    // 在画布中绘制
    ctx.draw()

    this.setData({
      h: h > 9 ? h : '0' + h,
      m: m > 9 ? m : '0' + m,
      s: s > 9 ? s : '0' + s
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 创建画布上下文
    this.ctx = wx.createCanvasContext("clockCanvas")

    // 每秒更新画面
    var that = this
    this.interval = setInterval(function() {
      //绘制时钟
      that.drawClock()

    }, 1000)

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
    clearInterval(this.interval)
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