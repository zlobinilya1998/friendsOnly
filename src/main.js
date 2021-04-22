import Vue from "vue";
import App from "./App.vue";
// import AppMobile from "./AppMobile.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
