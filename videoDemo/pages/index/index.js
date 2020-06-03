//index.js
//获取应用实例
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    supportSrc: ['/images/like.png', '/images/dislike.png', '/images/share.png'],
    currentTitle:'无',
    danmuText: [],
    list: [{
      'id': 0,
      'title': '杨国宜先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'
    }, {
      'id': 1,
      'title': '舒华山先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/E/2F/3B/9F772666C25304984D615C18374_143C6C4F_747458A.mp4?e=.mp4'
    }, {
      'id': 2,
      'title': '唐成伦先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4'
    }, {
      'id': 3,
      'title': '任兴田先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/4/E1/C6/3CD65724F5868782B1519CEAF86_5F7F0F43_6D89DE2.mp4?e=.mp4'
    }, {
      'id': 4,
      'title': '汪令词先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/3/58/36/72A8AFB8645E1AF1CC27673EC94_BA6881EA_98E0F51.mp4?e=.mp4'
    }, {
      'id': 5,
      'title': '倪光明先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4'
    }, {
      'id': 6,
      'title': '杨炜先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/0/F9/F7/29DBE55313F977E36799B06FF93_F96EDE58_88D1EE3.mp4?e=.mp4'
    }, {
      'id': 7,
      'title': '吴仪兴先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/5/DA/BD/7A27865731CF2B096E90B522005_A29CB142_6525BCF.mp4?e=.mp4'
    }, {
      'id': 8,
      'title': '杨克贵先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/8/55/61/DD5E2844FA10F58B5AAC6B76D5F_27256825_79DBAF3.mp4?e=.mp4'
    }, {
      'id': 9,
      'title': '臧宏先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/7/51/8D/D878079B4BAC556DA5FDFA1AA92_39D31E41_3E20150.mp4?e=.mp4'
    }, {
      'id': 10,
      'title': '辛志玉先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/9/85/25/5889EFFA4992ECC5B9A4EB4367D_1E1378B2_46AF7F5.mp4?e=.mp4'
    }, {
      'id': 11,
      'title': '周厚勋先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/9/6A/63/01CCF3577EF4F12BE3C98B82A41_4C277AF3_80507DC.mp4?e=.mp4'
    }, {
      'id': 12,
      'title': '翟大炳先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/2/0F/4E/97F6E991DF6E67E62D99FE207F3_F2CB36AA_59D3489.mp4?e=.mp4'
    }, {
      'id': 13,
      'title': '赵太意先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/F/46/7B/0B4E5076368C1104ED480EADCE7_0A691A3F_A8990A5.mp4?e=.mp4'
    }, {
      'id': 14,
      'title': '袁起河先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/2/40/89/61BAC340060D04591FAE909148B_A4BFB5E5_64CA3EE.mp4?e=.mp4'
    }, {
      'id': 15,
      'title': '郑鸣玉先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/D/4C/17/CFE24876A6593791AA200294F3E_32BDB716_49635A7.mp4?e=.mp4'
    }, {
      'id': 16,
      'title': '周承昭先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/8/77/66/4DFA9CE90A76D042A255FE86157_715BBECD_901F0FC.mp4?e=.mp4'
    }, {
      'id': 17,
      'title': '陆同兴先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/9/4A/42/E7DA5E0F64C14512E2C6811328E_D42D2D15_925A208.mp4?e=.mp4'
    }, {
      'id': 18,
      'title': '廖家骅先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/D/CE/4F/0ED9615A33D6CD34697778EB279_568A93DA_71C07FA.mp4?e=.mp4'
    }, {
      'id': 19,
      'title': '李先芬先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/B/59/3D/2492BCFB7FDE77373E7D436A524_674B98C2_6BC8395.mp4?e=.mp4'
    }, {
      'id': 20,
      'title': '黄香先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/6/F9/9F/5630E6510DD8136E63906662B91_A0D73E43_93BC785.mp4?e=.mp4'
    }, {
      'id': 21,
      'title': '丁常明先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/9/12/0D/1ABC367C9A7322545F902D56557_A2596E21_6FD278F.mp4?e=.mp4'
    }, {
      'id': 22,
      'title': '褚一纯先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/F/A6/05/04D48054196B3FFE5AE5132B97C_8554BD3F_839DF99.mp4?e=.mp4'
    }, {
      'id': 23,
      'title': '蔡素吾先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/0/DD/A8/B46B79B33B8E4B8BECF174028E0_C23737CC_AD8B42A.mp4?e=.mp4'
    }, {
      'id': 24,
      'title': '贝百欣先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/B/19/58/15D2242DE26DA410CCD5040E060_A95AFB37_7422372.mp4?e=.mp4'
    }, {
      'id': 25,
      'title': '陆润麟先生口述校史实录',
      'videoUrl': 'https://arch.ahnu.edu.cn/__local/0/DD/A8/B46B79B33B8E4B8BECF174028E0_C23737CC_AD8B42A.mp4?e=.mp4'
    }]
  },
  /**
   * 自定义函数--播放视频
   */
  playVideo: function(e) {
    // 获取视频地址
    console.log(e)
    // 暂停正在播放的视频
    this.videoctx.stop()
    // 更新视频地址
    this.setData({
      src: e.currentTarget.dataset.url,
      currentTitle:e.currentTarget.dataset.title
    })
    this.videoctx.play()
  },
  /**
   * 自定义函数--获取弹幕
   */
  getDanmu: function(e) {
    this.setData({
      danmuText: e.detail.value
    })
  },
  /**
   * 自定义函数--发送弹幕
   */
  sendDanmu: function() {
    let text = this.data.danmuText
    this.videoctx.sendDanmu({
      text: text,
      color: getRandomColor()
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 创建视频上下文  括号内要有引号？？？
    this.videoctx = wx.createVideoContext("myVideo")
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