import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { pinia } from "./stores";

createApp(App).use(router).use(pinia).mount("#app");
