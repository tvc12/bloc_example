import Vue from "vue";
import App from "./App.vue";
import VueBlocComponents from "@/Bloc/VueBloc/install";
import CommonComponents from "@/components/Common/install";
import "./themes/app.scss";

Vue.config.productionTip = false;
Vue.use(VueBlocComponents);
Vue.use(CommonComponents);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
