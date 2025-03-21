import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TagView from "../views/TagView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: () => import("../views/DetailsView.vue"),
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/CreateView.vue"),
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: () => TagView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
