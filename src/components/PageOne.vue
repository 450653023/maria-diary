<template>
  <div class="pageone">
    <MainContent />
    <Videos />
    <Articles />
    <Footer />
  </div>
</template>

<script>
import MainContent from "../components/MainContent.vue";
import Videos from "../components/Videos.vue";
import Articles from "../components/Articles.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "PageOne",
  components: {
    MainContent,
    Videos,
    Articles,
    Footer
  }
};
</script>

<style>
</style>