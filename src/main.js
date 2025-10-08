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
      component: () => import("./page/projects.vue"),
    },
    {
      path: "/projek/:id",
      name: "projekDetail",
      component: () => import("./page/projekDetail.vue"),
      props: true,
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
