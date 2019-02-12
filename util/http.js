import {config} from '../config.js'

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效，请去申请正确的appkey',
  3000: '期刊不存在'
}

class HTTP{
  request(params) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')){
          params.success(res.data)
        } else { // 404 401 500等错误
          this._show_error(res.data)
        }
      },
      fail: (err) => { // 没有网络等导致api调用失败
        this._show_error(1)
      }
    })
  }
  _show_error(res){
    let error_code = res.code
    let error_msg = res.msg
    wx.showToast({
      title: tips[error_code] || error_msg || tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export {HTTP}