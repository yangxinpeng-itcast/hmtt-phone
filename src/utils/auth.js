// 将token进行本地存储 , 向外部提供对应的方法

// 将本地存储名字统一定义为一个变量,方便管理

const USER_KEY = 'user'

// 定义并导出获取,设置,删除token方法
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(USER_KEY))
}

// 由于箭头函数中只有一个参数和一个表达式的时候可以省略{}和return
export const setUser = (data) => window.localStorage.setItem(USER_KEY, JSON.stringify(data))

export const removeUser = () => {
  return window.localStorage.remove(USER_KEY)
}
