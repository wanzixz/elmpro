import fetch from 'src/util/fetch'

// 获取节日礼包信息
const fetchTest = params => fetch('GET', '/seller', params)

export {
  fetchTest
}
