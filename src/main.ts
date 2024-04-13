import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { pinia } from "./stores";
import HighchartsVue from "highcharts-vue";

createApp(App).use(router).use(pinia).use(HighchartsVue).mount("#app");
