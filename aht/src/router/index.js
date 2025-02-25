import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CategoryPage from "@/views/CategoryPage.vue";
import ProductPage from "@/views/ProductPage.vue";

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/CategoryPage",
      name: "CategoryPage",
      component: CategoryPage,
    },
    {
      path: "/ProductPage",
      name: "ProductPage",
      component: ProductPage,
    },
  ],
});

export default router;