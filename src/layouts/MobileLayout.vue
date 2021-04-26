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

let MobileLayout = {
  name: "MobileLayout",
  components: {
    Header,
    Slider,
  },
  data() {
    return { route: this.$route.fullPath };
  },
  computed: {
    showSlider() {
      return this.route == "/mobile/news";
    },
  },
};
export default MobileLayout;
</script>

<style scoped>
.container {
  max-width: 329px;
  margin: 0px auto;
}
</style>
