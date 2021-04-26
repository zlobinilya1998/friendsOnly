<template>
  <component :is="layout" />
</template>

<script>
import DesktopLayout from "./layouts/DesktopLayout.vue";
import MobileLayout from "./layouts/MobileLayout.vue";
import NewsLayout from "./layouts/NewsLayout.vue";

const App = {
  components: {
    DesktopLayout,
    MobileLayout,
    NewsLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "desktop") + "-layout";
    },
  },
};
export default App;
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: url("../public/font/Roboto-Medium.ttf");
}
@font-face {
  font-family: "SF Pro Display-Regular";
  src: url("../public/font/SFProDisplay-Regular.woff");
}
@font-face {
  font-family: "SF Pro Display-Semibold";
  src: url("../public/font/SFProDisplay-Semibold.woff");
}
@font-face {
  font-family: "SF Pro Display-Bold";
  src: url("../public/font/SFProDisplay-Bold.woff");
}
@font-face {
  font-family: "SF Pro Rounded-Regular";
  src: url("../public/font/SFProRounded-Regular.woff");
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background: #f4f4f4;
  font-family: "SF Pro Display-Regular";
  color: hsla(240, 23%, 21%, 1);
  min-height: 100vh;
}
button {
  cursor: pointer;
}
button:focus {
  outline: none;
}
ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
p {
  margin: 0;
}
hr {
  margin: 15px 0px 20px 0px;
  position: absolute;
  left: 0;
  width: 100%;
  border: 1px solid black;
  opacity: 0.05;
}
input {
  border: none;
  font-family: "SF Pro Display-Regular";
}
input:focus {
  outline: none;
}
</style>
