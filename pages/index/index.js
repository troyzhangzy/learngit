Page({
  data: {
      tabs: ["全部","仪器","耗材","配件","砭石产品","私人订制"],
      activeIndex: 0,
      sliderOffset: 0
  },
  onLoad: function () {
      var that = this;
      wx.getSystemInfo({
          success: function (res) {
              that.mTabWidth = res.windowWidth / that.data.tabs.length;
          }
      });
  },
  bindChange: function (e) {
      var that = this;
      var curIndex = e.detail.current;
      that.setData({
          sliderOffset: curIndex * that.mTabWidth,
          activeIndex: curIndex
      });
  },
  tabClick: function (e) {
      var that = this;
      var cIndex = e.currentTarget.id;
      that.setData({
          sliderOffset: cIndex * that.mTabWidth,
          activeIndex: cIndex
      });
  },onLoad: function () {
    //滑动标识页面
    var that = this;
    wx.getSystemInfo({
        success: function (res) {
            that.mTabWidth = res.windowWidth / that.data.tabs.length;
        }
    });//
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

}

)