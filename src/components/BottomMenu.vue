<template>
  <div>
    <router-link class="item" to="/PageOne">主页</router-link>
    <router-link class="item" to="/PageTwo">PageTwo</router-link>
    <div class="item" @click="clickShare">
      <i class="iconfont icon-fenxiang"></i>
      <span>分享</span>
    </div>

    <!-- <div class="menu-item" v-bind:class="{ current: isClickPraise }"
      @click="clickPraise">
      <i class="iconfont icon-dianzan"></i>
      <i class="iconfont icon-dianzan2"></i>
      <span>有帮助</span>
    </div>
    <div class="menu-item" v-bind:class="{ current: isClickCollect }"
      @click="clickCollect">
      <i class="iconfont icon-shoucang"></i>
      <i class="iconfont icon-shoucang3"></i>
      <span>{{words}}</span>
    </div>
-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClickPraise: false,
      isClickCollect: false,
      isSharePanelShow: false
    }
  },
  props: {
    onClickShare: {
      type: Function,
      default: () => []
    },
    words: {
      type: String
    }
  },
  methods: {
    clickPraise() {
      this.isClickPraise = !this.isClickPraise;
    },
    clickCollect() {
      this.isClickCollect = !this.isClickCollect;
    },
    clickShare() {
      this.onClickShare && this.onClickShare();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/font/font";

.item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
}
</style>