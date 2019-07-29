<template>
  <div class="box">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field v-model="user.mobile" required label="手机号" placeholder="手机号" />

      <van-field v-model="user.code" type="password" label="验证码" placeholder="验证码" required />
    </van-cell-group>
    <van-button type="info" @click.prevent="userLogin">登录</van-button>
  </div>
</template>

<script>
// import request from '../../utils/request.js'
import { login } from '@/api/user.js'
export default {
  data() {
    return {
      user: {
        mobile: "18801185985",
        code: "246810"
      }
    };
  },
  methods: {
    async userLogin() {
        const res = await login(this.user);
        console.log(res)
      } 
  }
};
</script>

<style scoped lang="less">
.box {
  .van-nav-bar {
    background-color: #0096fa;
  }
  .van-button {
    width: 100%;
  }
}
</style>
