<template>
  <div id="app">
    <div class="page-qq-baike">
      <router-view class="container"></router-view>
      <BottomMenu class="menu" :onClickShare="showShare" :words="msg" />
      <Modal v-if="showModal" :onCloseModal="closeModal" />
    </div>
  </div>
</template>

<script>
import BottomMenu from "./components/BottomMenu.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      showModal: false,
      msg: '测试'
    }
  },
  components: {
    BottomMenu,
    Modal
  },
  methods: {
    showShare() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/css/font/font.scss";
@import "./assets/css/base/mixin.scss";
@import "./assets/css/pages/qq-baike.scss";

.container {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  border: 4px solid red;
}

.menu {
  width: 100%;
  height: 60px;
  display: flex;

  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid green;
  }
}
</style>