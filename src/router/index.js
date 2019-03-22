import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/hello",
      component: resolve => require(["@/views/hello"], resolve),
      children:[{
        path:'/child',
        component:resolve => require(["@/views/child"], resolve),
      }]
    }
  ]
});
