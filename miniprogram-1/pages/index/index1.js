// pages/index/index1.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navH: 0,
        rotationList:[
            {imgurl: 'https://www.scnusay.cc/indexswiper/1.jpg',},
            {imgurl: 'https://news.scnu.edu.cn/media/image/2020/11/2020112537fb67.jpeg.v',},
            {imgurl: 'https://www.scnusay.cc/indexswiper/2.jpg'}
            
        ],
        
    sortList:[
      {
        icon: "https://www.scnusay.cc/icon/news.png",
        sortid: 1,
        text:"失物招领",
        jumpid:"lostthing"
      },{
        icon: "https://www.scnusay.cc/icon/second-hand.png",
        sortid: 2,
        text:"闲置交易",
        jumpid:"shchange"
      },{
        icon: "https://www.scnusay.cc/icon/love-mood.png",
        sortid: 3,
        text:"拼车同行",
        jumpid:"car"
      },{
        icon: "https://www.scnusay.cc/icon/question-ask.png",
        sortid: 4,
        text:"队友招募",
        jumpid:"team"
      },{
        icon: "https://www.scnusay.cc/icon/part-time-job.png",
        sortid: 5,
        text:"美食点评",
        jumpid:"food"
      }
    ],
        swiperCurrent: 0
    },

   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        navH: app.globalData.navHeight
      });
    },
    lostthing: function (e) {
      // 发起网络请求
      wx.navigateTo({
      // 开发者服务器接口地址
        url: '/pages/lostthing/index',
      })
    },
    shchange: function (e) {
      // 发起网络请求
      wx.navigateTo({
      // 开发者服务器接口地址
        url: '/pages/SecendHandChange/index?indexs=0',
      })
    },
    car: function (e) {
      // 发起网络请求
      wx.navigateTo({
      // 开发者服务器接口地址
        url: '/pages/ShareCar/index',
      })
    },
    team: function (e) {
      // 发起网络请求
      wx.navigateTo({
      // 开发者服务器接口地址
        url: '/pages/team/team',
      })
    },
    food: function (e) {
      // 发起网络请求
      wx.navigateTo({
      // 开发者服务器接口地址
        url: '/pages/foodreview/index?indexs=0',
      })
    },
    logo: function (e) {
      // 发起网络请求
      wx.navigateTo({
      // 开发者服务器接口地址
        url: '/pages/index/index',
      })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    swiperChange: function (e) {
        if (e.detail.source === 'touch'){
          this.setData({
            swiperCurrent: e.detail.current
          })
        }
      },
      
})