import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MovieList from "@/components/MovieList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "home",
          component: MovieList
        },
        {
          path: "/popular",
          name: "popular",
          component: MovieList
        },
        {
          path: "/top-rated",
          name: "top-rated",
          component: MovieList
        },
        {
          path: "/now-playing",
          name: "now-playing",
          component: MovieList
        },
        {
          path: "/favorite",
          name: "favorite",
          component: MovieList
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
