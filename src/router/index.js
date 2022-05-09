import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetails from "../views/products/ProductDetails.vue";
import Products from "../views/products/Products.vue";
import Error404 from "../views/Error404.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Products",
      component: Products,
    },
    {
      path: "/products/:slug",
      name: "ProductDetails",
      component: ProductDetails,
    },

    // Redirect
    {
      path: "/products",
      redirect: "/",
    },

    // Capture 404
    // we use catchAll(.*) to capture all links that doesn't exist i.e 404s
    {
      path: "/:catchAll(.*)",
      name: Error404,
      component: Error404,
    },
  ],
});

export default router;
