import Vue from "vue";
import Router from "vue-router";
import basic from "@/layout/basic";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home",
      name: "basic",
      component: basic,
      children: [
        {
          path: "/home",
          name: "/home",
          component: () => import("@/views/Home"),
        }
      ]
    }
  ]
});
