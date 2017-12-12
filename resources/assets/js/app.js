import Vue from "vue";
import router from "@/router";
import App from "@/components/App";
import Vuetify from "vuetify";

import "@/components";
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  ...App
});
