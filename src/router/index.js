import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView
  },
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
