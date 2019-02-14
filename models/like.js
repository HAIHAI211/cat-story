import {HTTP} from '../util/http.js'

class LikeModel extends HTTP {
  // 采用的是先更新客户端数据，再通知服务端的方法
  like (behavior, artId, category) {
    let url = behavior === 'like' ? 'like' : 'like/cancel'
    this.request({
        url,
        method: 'POST',
        data: {
          art_id: artId,
          type: category
        },

    })
  }
}

export {LikeModel}