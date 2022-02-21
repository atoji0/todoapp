import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppHome from "../views/AppHome.vue";
import TodoList from "../views/TodoList.vue";
import NotFound from "../components/NotFound.vue";

const routers: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: AppHome,
  },
  {
    path: "/todo",
    component: TodoList,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
