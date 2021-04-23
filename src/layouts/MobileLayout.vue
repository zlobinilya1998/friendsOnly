<template>
  <div class="root">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../mobile/components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.container {
  max-width: 329px;
  margin: 0px auto;
}
</style>
