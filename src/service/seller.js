import fetch from 'src/util/fetch'

// 获取seller
const fetchSeller = params => fetch('GET', '/seller', params)

// 获取goods
const fetchGoods = params => fetch('GET', '/goods', params)

export {
  fetchSeller,
  fetchGoods
}
