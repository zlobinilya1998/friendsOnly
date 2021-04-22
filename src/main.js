import Vue from "vue";
import router from "./router";
import Main from "./Main.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(Main),
}).$mount("#app");
