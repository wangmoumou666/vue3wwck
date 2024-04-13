import "@/styles/common.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { lazyPlugin } from "@/directives";
import App from "./App.vue";
import router from "./router";
import { componentPlugin } from "@/components";

const app = createApp(App);
const pinia = createPinia();

app.use(lazyPlugin);
app.use(router);
app.use(pinia);
app.use(componentPlugin);
app.mount("#app");
