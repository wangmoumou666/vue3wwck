import "@/styles/common.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { getCategoryAPI } from "@/apis/testApi";

const app = createApp(App);

app.use(router);
getCategoryAPI().then((res) => {
  console.log(res);
});
app.mount("#app");
