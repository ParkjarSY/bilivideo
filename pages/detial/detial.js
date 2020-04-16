// pages/detial/detial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		// 视频详情
		videoInfo:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	let videoId = options.id;
	this.getMessageViseo(videoId);
  },
	// 获取视频详情用id
  getMessageViseo(videoId){
	  let info = this
    	wx.request({
			url:"http://mock-api.com/mnEe4VnJ.mock/videoDetail?1d="+videoId,
			success(res) {
				if(res.data.code === 0){
					info.setData({
						videoInfo:res.data.data.videoInfo
					})
				}
			}
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

  }
})