/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Preston-zhou
 * @Date: 2020-09-19 10:03:05
 * @LastEditors: Preston-zhou
 * @LastEditTime: 2020-09-21 16:09:29
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//import 'amfe-flexible/index'  //引入vue3 的适配方案 amfe-flexible

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
