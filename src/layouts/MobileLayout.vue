<template>
  <div>
    <Header />
    <Slider v-if="showSlider" />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../mobile/components/Header";
import Slider from "../mobile/components/Slider";

export default {
  components: {
    Header,
    Slider,
  },
  data() {
    return {
      route: this.$route.fullPath,
    };
  },
  computed: {
    showSlider() {
      return this.route == "/mobile/news";
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 329px;
  margin: 0px auto;
}
</style>
