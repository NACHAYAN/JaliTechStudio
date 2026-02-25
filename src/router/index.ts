import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: () => import("@views/dashboard/console/index.vue") },
  { path: "/login", component: () => import("@views/auth/login/index.vue") },
];
export const router = createRouter({ history: createWebHistory(), routes });
