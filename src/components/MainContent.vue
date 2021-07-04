<template>
  <div class="main bottomspace">
    <div class="main_hd">
      <img class="top-video-img" src="../assets/img/banner.jpg" />
    </div>
    <div class="main_bd">
      <p class="title">原来产后抑郁症和产后情绪低落的区别在这里！</p>
      <p class="author">Healthwise 美国著名的医疗健康信息服务商</p>
      <p class="time">更新于 2018-06-19</p>
    </div>
    <div class="main_ft">
      <ModTitle msg="视频简介" />
      <p class="content">抑郁症是女性最高发的心理疾病。目前全球范围内每年新发乳腺癌达 168
        万人，每年有 52
        万女性因乳腺癌而死亡。科学地进行乳房检查有利于尽早发现乳腺疾病现乳腺抑郁症是女性最高发的心理疾病。目前全球范围内每年新发乳腺癌达
        168 万人，每年有 52
        万女性因乳腺癌而死亡。科学地进行乳房检查有利于尽早发现乳腺疾病现乳腺
      </p>
    </div>
  </div>
</template>

<script>
import ModTitle from "./ModTitle.vue";

export default {
  name: "MainContent",
  components: {
    ModTitle
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/widget/main-content.scss";
</style>