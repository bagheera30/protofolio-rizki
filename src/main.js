import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: () => import("./page/home.vue"),
    },
    {
      path: "/projek",
      component: () => import("./page/projek.vue"),
    },
    {
      path: "/contact",
      component: () => import("./page/contact.vue"),
    },
    {
      path: "/cartived",
      component: () => import("./page/cartifide.vue"),
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
