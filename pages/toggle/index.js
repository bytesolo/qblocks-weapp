// pages/toggle/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result1: ["1", "2"],
    result2: ["2"],
    items1: [{
        name: "1",
        label: "标签1"
      },
      {
        name: "2",
        label: "标签2"
      },
      {
        name: "3",
        label: "标签3"
      }
    ],
    items2: [{
        name: "1",
        label: "标签4"
      },
      {
        name: "2",
        label: "标签5"
      },
      {
        name: "3",
        label: "标签6"
      }
    ]
  },
  onChange(e) {
    console.log(e.detail.value)
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