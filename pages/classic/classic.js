// import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'
// let classicModel = new ClassicModel()
let likeModel = new LikeModel()
const app = getApp();
const db = app.globalData.db
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    latest: true,
    first: false
  },

  onLike: function (event) {
    console.log(event)
    let behavior = event.detail.behavior
    let id = this.data.classicData._id
    let category = this.data.classicData.type
    likeModel.like(behavior, id, category)
  },

  onNext: function (event) {

  },

  onPrevious: function (event) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 最先被触发 因此请求在这里
    db.collection('classic').doc('XGPOgFsqTi00tnQn').get({
      success: (res) => {
        console.log(res.data)
        this.setData({
          classicData: res.data
        })
      }
    })


    // classicModel.getLatest((res)=>{
    //   console.log(res)
    //   this.setData({
    //     classicData: res
    //   })
    // })
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
