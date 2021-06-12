import Vue from "vue";
import App from "./App.vue";
import VueBlocComponents from "@/Bloc/VueBloc/install";

Vue.config.productionTip = false;
Vue.use(VueBlocComponents);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
