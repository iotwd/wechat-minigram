// pages/books/books.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDownloading: false,
    percentNumber: 0,
    bookList: [{
        id: '001',
        title: 'java编程思想',
        poster: 'https://img9.doubanio.com/view/subject/l/public/s27243455.jpg',
        fileUrl: 'http://localhost:8081/books/book001.pdf'

        // fileUrl: 'https://cmdxy.com/minigram/books/book001.pdf'
      },
      {
        id: '002',
        title: '易学C++',
        poster: 'https://img3.doubanio.com/view/subject/l/public/s3105400.jpg',
        fileUrl: 'http://localhost:8081/books/深入理解Linux内核第3版.pdf'
        // fileUrl: 'https://cmdxy.com/minigram/books/易学C++.pdf'
      },
      {
        id: '003',
        title: '深入理解Linux内核第3版',
        poster: 'https://img9.doubanio.com/view/subject/l/public/s27314344.jpg',
        fileUrl: 'http://localhost:8081/books/深入理解Linux内核第3版.pdf'
        // fileUrl: 'https://cmdxy.com/minigram/books/深入理解Linux内核第3版.pdf'
      }, {
        id: '004',
        title: '深入理解计算机系统',
        poster: 'https://img9.doubanio.com/view/subject/l/public/s4510534.jpg',
        fileUrl: 'http://localhost:8081/books/深入理解计算机系统.pdf'
        // fileUrl: "https://cmdxy.com/minigram/books/深入理解计算机系统.pdf"
      }, {
        id: '005',
        title: '这是一本没有的书',
        poster: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1844034196,1013308534&fm=15&gp=0.jpg',
        fileUrl: 'http://localhost:8081/books/book001.pdf'
        // fileUrl: 'https://cmdxy.com/minigram/books/'
      }
    ]


  },
  /**
   * 自定义函数--封装showModal方法
   */
  showTips: function(content) {
    wx.showModal({
      title: '提醒',
      content: content,
      showCancel: false
    })
  },
  /**
   * 自定义函数--打开文件
   */
  openBook: function(path) {
    wx.openDocument({
      filePath: path,
      success: function(res) {
        console.log("打开成功")
      },
      fail: function(error) {
        console.log(error)
      }
    })
  },
  /**
   * 自定义函数--下载图书
   */
  saveBook: function(id, path) {
    var that = this
    wx.saveFile({
      tempFilePath: path,
      success: function(res) {
        let newPath = res.savedFilePath
        wx.setStorageSync(id, newPath)
        // console.log("保存成功")
        that.openBook(newPath)
      },
      fail: function(error) {
        // console.log(error)
        that.showTips('文件保存失败')
        // that.showTips("文件保存失败")
      }
    })
  },
  /**
   * 自定义函数--读书
   */
  readBook: function(e) {
    var that = this
    let id = e.currentTarget.dataset.id
    let fileUrl = e.currentTarget.dataset.file
    console.log(id)
    console.log(fileUrl)

    // 查看本地缓存是否下载
    let path = wx.getStorageSync(id)
    if (path != '') {
      that.openBook(path)
    } else {
      // 进入下载蒙层
      that.setData({
        isDownloading: true
      })
      // 下载图书
      const downloadTask = wx.downloadFile({
        url: fileUrl,
        success: function(res) {
          // 先关闭下载蒙层
          that.setData({
            isDownloading: false
          })
          // 如果服务器响应
          if (res.statusCode == "200") {
            // 获取下载地址
            path = res.tempFilePath
            // 保存文件
            that.saveBook(id, path)
          } else {
            // 提示下载失败
            that.showTips("暂时无法下载，可能资源不存在")
          }
        },
        fail: function(error) {
          // 先关闭下载蒙层
          that.setData({
            isDownloading: false
          })
          // 无法连接服务器
          that.showTips("无法连接服务器")
        }
      })

      // 监听下载进度
      downloadTask.onProgressUpdate(function(res) {
        let progress = res.progress
        that.setData({
          percentNumber: progress
        })
      })

    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.clearStorage()
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