import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import Register from "../components/views/Register.vue";
import Error404 from "../components/views/error.vue";

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
  {
    path: "/:catchAll(.*)",
    name: "error404",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
