// pages/sjxarea/sjxarea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area:''
  },
  formSubmit:function(e){
    let a = parseFloat(e.detail.value.a)
    let b = parseFloat(e.detail.value.b)
    let c = parseFloat(e.detail.value.c)
    if(a+b>c && a+c>b && b+c>a){
      let p = (a+b+c)/2
      let area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
      this.setData({
        area:area.toFixed(2)
      })
    }
    else{
      wx.showToast({
        title: '您输入的三角形有误',
        icon:'none'
      })
    }
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