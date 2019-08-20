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
      redirect: "/topic",
      name: "basic",
      component: basic,
      children: [
        {
          path: "/topic",
          name: "/topic",
          component: () => import("@/views/Topic")
        },
        {
          path: "/topic/createEdit",
          name: "/topic/createEdit",
          component: () => import("@/views/TopicCreateEdit")
        },
        {
          path: "/topic/notice",
          name: "/topic/notice",
          component: () => import("@/views/Notice")
        },
        {
          path: "/personal",
          name: "/personnal",
          component: () => import("@/views/Personal")
        },
        {
          path: "/editPersonInfo",
          name: "/editPersonInfo",
          component: () => import("@/views/EditPersonInfo")
        },
        {
          path: "/topic/detail",
          name: "/topic/detail",
          component: () => import("@/views/TopicDetail")
        },
        {
          path: "/regis",
          name: "/regis",
          component: () => import("@/views/Regis")
        },
        {
          path: "/login",
          name: "/login",
          component: () => import("@/views/Login")
        }
      ]
    }
  ]
});
