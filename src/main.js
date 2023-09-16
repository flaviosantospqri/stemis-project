import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  faSearch,
  faPlus,
  faArrowLeft,
  faX,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSearch, faPlus, faArrowLeft, faX, faHouse);

const app = createApp(App);
app.component("fa", FontAwesomeIcon);
app.use(router);
app.mount("#app");
