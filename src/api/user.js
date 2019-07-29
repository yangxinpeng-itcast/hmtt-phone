// 用户相关请求

// 引入request模块
import request from '../utils/request.js'

// 封装登录请求的方法

// 这里的解构赋值解构点击登录传过来的对象
export const login = ({
  mobile,
  code
}) => {
  return request({
    method: 'post',
    url: 'app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
