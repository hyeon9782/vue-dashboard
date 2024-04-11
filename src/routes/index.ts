import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@pages/home/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@pages/login/index.vue"),
  },
  {
    path: "/job/job-status",
    name: "Job Status",
    component: () => import("@pages/job/status/index.vue"),
  },
  {
    path: "/job/job-planning",
    name: "Job Planning",
    component: () => import("@pages/job/planning/index.vue"),
  },
  {
    path: "/searched/protein-results",
    name: "Searched Protein",
    component: () => import("@pages/searched/protein-results/index.vue"),
  },
  {
    path: "/searched/glycoprotein-results",
    name: "Searched Glycoprotein",
    component: () => import("@pages/searched/glycoprotein-results/index.vue"),
  },
  {
    path: "/statistics/protein-results",
    name: "Statistics Protein",
    component: () => import("@pages/statistics/protein-results/index.vue"),
  },
  {
    path: "/statistics/glycoprotein-results",
    name: "Statistics Glycoprotein",
    component: () => import("@pages/statistics/glycoprotein-results/index.vue"),
  },
  {
    path: "/network/protein-results",
    name: "Network Protein",
    component: () => import("@pages/network/protein-results/index.vue"),
  },
  {
    path: "/network/glycoprotein-results",
    name: "Network Glycoprotein",
    component: () => import("@pages/network/glycoprotein-results/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
