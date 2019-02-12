// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 数据绑定
    yesSrc: 'images/like@2x.png',
    noSrc: 'images/dislike@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike () {
      let like = this.properties.like
      let count = this.properties.count

      like = !like
      count = like?count+1:count-1

      this.setData({
        count,
        like
      })
    } 
  }
})
