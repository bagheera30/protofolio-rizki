import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import favicon from "../public/logo.svg";

const link = document.querySelector("link[rel~='icon']");
link.href = favicon;
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
      path: "/contact",
      component: () => import("./page/contact.vue"),
    },
    {
      path: "/certificates",
      component: () => import("./page/cartifide.vue"),
    },
    {
      path: "/journey",
      component: () => import("./page/jurney.vue"),
    },
    {
      path: "/expirence",
      component: () => import("./page/expirence.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
