import 'whatwg-fetch'
import {
  baseUrl,
  shopId
} from './env'

export default (type = 'GET', url = '', data = {}, defaultMode, old, returnFlag) => {
  return new Promise((resolve, reject) => { // 返回一个promise
    type = type.toUpperCase()
    url = (old ? '' : baseUrl) + url
    let requestObj = {
      credentials: 'include',
      method: type,
      headers: {
        'X-Brand-Label': shopId,
        'callbackurl': window.location.href
      }
    }

    requestObj.headers['Content-Type'] = 'application/json;charset=UTF-8'

    if (type === 'GET') {
      let dataStr = '' // 数据拼接字符串
      Object
        .keys(data)
        .forEach(key => {
          if (data[key] === 0 || data[key]) {
            dataStr += key + '=' + data[key] + '&'
          }
        })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
    } else if (type === 'POST') {
      Object.defineProperty(requestObj, 'body', {
        value: JSON.stringify(data)
      })
    } else {
      reject('error type') // eslint-disable-line
    }

    fetch(url, requestObj).then(res => {
      if (res.status === 401) {
        let url = window.location.href
        let skuPurpose = window
          .sessionStorage
          .getItem('skuPurpose')
        // 加标识 用于商品详情未授权时，授权后归来仍然弹出
        if (skuPurpose) {
          if (url.indexOf('?') === -1) {
            url = url + '?skuPopFlag=1&skuPurpose=' + skuPurpose
          } else {
            url = url + '&skuPopFlag=1&skuPurpose=' + skuPurpose
          }
        }
        window.location.href = '../oauth/login?callback=' + encodeURIComponent(url)
      } else if (res.status === 400) {
        if (returnFlag) {
          return res.json()
        } else {
          res
            .json()
            .then(data => {
              if (data.code === 107201013) {
                setTimeout(() => {
                  window
                    .location
                    .reload()
                }, 3000)
              } else if (data.code === 283101010) {
                window.location.href = '../shop/error'
              } else if (data.code === 283101005) {
                window.location.href = '../product/category'
              }
              window
                .toast
                .show({
                  text: data.message,
                  type: 'text'
                })
            })
        }
      } else if (res.status === 500) {
        res
          .json()
          .then(data => {
            window
              .toast
              .show({
                text: data.message,
                type: 'text'
              })
          })
      } else if (res.status === 302) {
        res
          .json()
          .then(data => {
            window.location.href = data.callbackUrl
          })
      } else if (res.status === 304) {
        window.location.href = '../shop/choose-shop'
      } else {
        return res.json()
      }
    }).then(data => {
      if (data) {
        if (data.errcode && defaultMode !== false) {
          window
            .toast
            .show({
              text: data.errmsg,
              type: 'text'
            })
          reject(data.errmsg)
        } else {
          resolve(data)
        }
      } else {
      reject('no data') // eslint-disable-line
      }
    }).catch(err => {
      reject(err)
    })
  })
}
