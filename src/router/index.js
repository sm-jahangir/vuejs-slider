import Vue from "vue";
import Router from "vue-router";
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Project from '../pages/Project.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/project",
      name: "project",
      component: Project
    },
  ]
});