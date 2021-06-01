import Vue from "vue";
import App from "./App.vue";
import VueBlocComponents from "@/components/VueBloc/install";

Vue.config.productionTip = false;
Vue.use(VueBlocComponents);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
