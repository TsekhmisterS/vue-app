import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import Home from "../components/Home.vue";
import Profile from "../components/Profile.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
    children: [
      { path: "home", component: Home },
      { path: "profile", component: Profile },
      { path: "/:pathMatch(.*)*", component: NotFound }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
