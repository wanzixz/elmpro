/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl : 路由地址域名
 *
 */
let baseUrl
let shopId
let routerMode
if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://scliveapp2015.weixindev.cxm/api' baseUrl =
  // 'http://scliveapp2015.wx338.newwsh.snsshop.net/api' // 开发环境
  baseUrl = '/api'
  routerMode = 'history'
} else {
  baseUrl = '/api'
  routerMode = 'history'
}
shopId = window
  .location
  .pathname
  .split('/')[1]

export {baseUrl, routerMode, shopId}
