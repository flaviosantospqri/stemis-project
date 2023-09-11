import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import Register from "../components/views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
