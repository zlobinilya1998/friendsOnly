<template>
  <div>
    <Header />
    <router-view> </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

let DesktopLayout = {
  components: {
    Header,
    Footer,
  },
};
export default DesktopLayout;
</script>

<style></style>
