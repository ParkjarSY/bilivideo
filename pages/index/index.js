Page({

  /**
   * 页面的初始数据
   */
  data: {
	  
	  // 首页导航数据
    navList:[],
	// 被点击的索引
	clickNav:0,
	// 轮播图
	swiperList:[],
	// 轮播图的个性化设置
	indicatorDots:true,
	interval:3000,
	autoplay:true,
	circular:true,
	// 视频数据
	videoList:[],
	
	
	
  },
  // 点击首页的导航
  clickNav(e){
	this.setData({
		clickNav:e.target.dataset.index
	})  
  },
  // 获取首页导航数据
  getNavList(){
	  let nav = this;
	  wx.request({
		  url:"http://mock-api.com/mnEe4VnJ.mock/navList",
		  success(res) {
		  	if(res.data.code === 0){
				nav.setData({
					navList:res.data.data.navList,
				})
			}
		  }
	  })
  },
// 获取轮播图内容
  getSwiperList(){
	  let swiper = this
	  wx.request({
		  url:"http://mock-api.com/mnEe4VnJ.mock/swiperList",
		  success(res){
			  if(res.data.code === 0){
				 swiper.setData({
					 swiperList:res.data.data.swiperList
				 }) 
			  }
		  }
	  })
  },
  // 获取视频信息内容
  getVideo(){
	  let video = this;
	  wx.request({
		  url:"http://mock-api.com/mnEe4VnJ.mock/videoList",
		  success(res){
			  if(res.data.code === 0){
				  video.setData({
					  videoList:res.data.data.videoList,
				  })
			  }
		  }
	  })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页导航
	this.getNavList();
	// 调用轮播图函数
	this.getSwiperList();
	// 调用视频列表
	this.getVideo();
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