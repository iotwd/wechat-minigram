// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 游戏初始化周期函数--监听页面加载
   */
  initial: function(options) {
    this.setData({
      pcAnswer: Math.round(Math.random() * 100), //答案
      count: 0, //回合数
      tip: '', //tips
      isGaming: true,
      userAnswer: -1
    })
  },
  /**
   * 获取用户输入数字--监听页面加载
   */
  getNumber: function(e) {
    //开始游戏
    let x = e.detail.value;
    this.setData({
      userAnswer: x
    })
    console.log(x);
  },
  /**
   * 判断答案--监听页面加载
   */
  judgeNumber: function(e) {
    //获取用户答案
    let userAnswer = this.data.userAnswer
    let pcAnwser = this.data.pcAnswer
    let count = this.data.count
    let tip = this.data.tip
    let isGaming=this.data.isGaming
    if (userAnswer < 0 || userAnswer > 100) {
      wx.showToast({
        title: '您输入的不合法',
      })
    } else {
      count += 1
      if (userAnswer == pcAnwser) {
        tip += '\n第' + count + '回合：'+userAnswer+ ' 恭喜你猜对了！'+'\n游戏结束！'
        isGaming=false

      } else if (userAnswer > pcAnwser) {
        tip += '\n第' + count + '回合：' + userAnswer + ' 亲，试着猜小点儿吧！'
      } else {
        tip += '\n第' + count + '回合：' + userAnswer + ' 亲，试着猜大点儿吧！'
      }

      if(count==8){
        tip += '\n次数已用完，游戏结束！'
      }

      this.setData({
        count: count, //回合数
        tip: tip, //tips
        isGaming: isGaming,
        userAnswer: -1
      })
    } 
    
  },
  /**
   * 重新开始--监听页面加载
   */
  restartGame: function (options) {
    //开始游戏
    this.initial()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //开始游戏
    this.initial()
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