<template>
  <div>
    <van-nav-bar title="首页" fixed />
    <van-tabs v-model="activeName" class="channel-tab">
      <van-tab title="推荐">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="科技动态"></van-tab>
      <van-tab title="php"></van-tab>
      <van-tab title="linux"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      list: [],
      loading: false,
      finished: false,
      isLoading: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style  scoped lang="less">
.van-nav-bar {
  background-color: #1989fa;
  .van-nav-bar__title {
    color: #ffffff;
  }
}

// 样式无论怎么写, 只要能实现, 就可以

// 整体内容的底部-> 距离tabbar的位置
.channel-tab {
  margin-bottom: 100px;
}

// 整体tabs的位置
// 下面的代码只针对首页样式->需要scoped
// 矛盾: 不加scoped 虽然样式生效
// 深度作用域 /deep/->来源于vue框架
// channel-tab van-tabs

// 下面这个写法>>> 来源于vue文档-> 但是在css预处理器比如less/sass环境下失效
// .channel-tab >>> .van-tabs__wrap {}
.channel-tab /deep/ .van-tabs__wrap {
  position: fixed;
  top: 92px;
  width: 100%;
}

// 内容
.channel-tab /deep/ .van-tabs__content {
  margin-top: 92px;
}
</style>
