import Vue from "vue";
import router from "@/router";
import store from "@/store";
import App from "@/components/App";
import Vuetify from "vuetify";
import VeeValidate from "vee-validate";

import "@/plugins";
import "@/components";

Vue.use(VeeValidate);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  ...App
});
