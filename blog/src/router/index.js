/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Preston-zhou
 * @Date: 2020-09-19 10:03:05
 * @LastEditors: Preston-zhou
 * @LastEditTime: 2020-09-19 14:32:24
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
