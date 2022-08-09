import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "normalize.css/normalize.css";
import "./assets/css/all.css";
// px2rem 自适应
import "lib-flexible";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
