import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import { VueAxios } from "./utils/request";
import "./components";

Vue.config.productionTip = false;

import "./core/use";
Vue.use(VueAxios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
