// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },
  chooseImage:function(){
    var that = this
    wx.chooseImage({
      count:'1',
      sizeType:['original','compressed'],
      sourceType:['album','album'],
      success:function(res){
        var temp = res.tempFilePaths
        that.setData({
          src:res.tempFilePaths[0]
        })
      }
    })
  },
  yulan:function(){
    var that = this
    wx.previewImage({
      urls: [that.data.src],
    })
  },
  getInfo:function(){
    var that = this
    wx.getImageInfo({
      src: that.data.src,
      success:function(res){
        wx.showToast({
          title: '宽：'+res.width,
          icon:'none'
        })
      }
    })
  },
  saveImg:function(){
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.src,
      success:function(){
        wx.showToast({
          title: 'chenggong',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})