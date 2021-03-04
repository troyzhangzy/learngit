// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["全部","待发货","已发货"],
    navState:0,
      activeIndex: 0,
      sliderOffset: 0
   
  },

  bindChange: function (e) {
    var that = this;
    var curIndex = e.detail.current;
    that.setData({
        sliderOffset: curIndex * that.mTabWidth,
        activeIndex: curIndex
    });
  },tabClick: function (e) {
    var that = this;
    var cIndex = e.currentTarget.id;
    that.setData({
        sliderOffset: cIndex * that.mTabWidth,
        activeIndex: cIndex
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //滑动标识页面
    var that = this;
    wx.getSystemInfo({
        success: function (res) {
            that.mTabWidth = res.windowWidth / that.data.tabs.length;
        }
    });//
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

  }
})