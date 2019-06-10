import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.http.options.root = "https://api.themoviedb.org/3/";
Vue.http.headers.common["Content-Type"] = "application/json;charset=utf-8";

Vue.http.interceptors.push(function(request, next) {
  request.params["api_key"] = "a8199d65724ca851205d499e4a9ff501";
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
