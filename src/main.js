import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: () => import("./components/HelloWorld.vue"),
    },
    {
      path: "/projek",
      component: () => import("./components/projek.vue"),
    },
    {
      path: "/contact",
      component: () => import("./components/contact.vue"),
    },
  ],
  history: createWebHistory(),
});
createApp(App).use(router).mount("#app");
