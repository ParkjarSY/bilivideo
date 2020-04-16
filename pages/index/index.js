Page({

  /**
   * 页面的初始数据
   */
  data: {
	  
	  // 首页导航数据
    navList:[],
	
	
  },
  
  // 获取首页导航数据
  getNavList(){
	  let that = this;
	  wx.request({
		  url:"http://mock-api.com/mnEe4VnJ.mock/navList",
		  success(res) {
		  	if(res.data.code === 0){
				that.setData({
					navList:res.data.data.navList,
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