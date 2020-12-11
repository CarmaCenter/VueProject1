
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";

// //Make Upeercase
// filter("uppercase", function (v) {
//  return v.toUpperCase();
// });

createApp(App)
 .use(store)
 .use(router)
 .mount("#app");
