<template>
  <div class="box">
    <van-nav-bar title="登录" />
    <form action="/">
      <van-cell-group>
        <van-field
          v-validate="'required|phone'"
          name="phone"
          v-model="user.mobile"
          :error-message="errors.first('phone')"
          label="手机号"
          placeholder="请输入用户名"
          required
        />

        <van-field v-model="user.code" label="验证码" placeholder="请输入验证码" required type="password" />
      </van-cell-group>
      <!-- @事件名.修饰符 -->
      <van-button :loading="loading" type="info" @click.prevent="userLogin">登录</van-button>
    </form>
  </div>
</template>

<script>
// import request from '../../utils/request.js'
import { login } from "@/api/user.js";
export default {
  data() {
    return {
      user: {
        mobile: "18801185985",
        code: "246810"
      },
      loading: false
    };
  },
  methods: {
    async userLogin() {
    this.loading = true
      this.$validator.validate().then(async valid => {
        if (!valid) {
          this.loading = false
          return
        }
        const res = await login(this.user)
        this.$store.commit("setUser", res)
        this.loading = false
        this.$router.push({path:'/'})
      })
    }
  }
};
</script>

<style scoped lang="less">
.box {
  .van-nav-bar {
    background-color: #0096fa;
    color: #fff
  }
  .van-button {
    width: 100%;
  }
}
</style>
