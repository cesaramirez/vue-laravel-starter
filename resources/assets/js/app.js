import Vue from 'vue'
import router from "@/router";
import App from '@/components/App'

import "@/components";

Vue.config.productionTip = false

new Vue({
  router,
  ...App
})
