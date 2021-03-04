// pages/marketing/marketing.js
Page({
  data: {
    addflag:true,  //判断是否显示搜索框右侧部分
    addimg:'../../components/searchBox/images/activity_add.png',
    searchstr:'',
    navState:0,
    //滑动标识页
    tabs: ["产品","视频"],
      activeIndex: 0,
      sliderOffset: 0
   
  },
  onLoad: function () {
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


  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
  },
  

  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value
    })
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
  },
  //清空搜索框
  activity_clear(e) {

    this.setData({
      searchstr: ''
    })
  },
})