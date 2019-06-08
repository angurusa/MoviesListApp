import Vue from "vue";
import Vuex from "vuex";

import movies from "./apiResults";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: movies,
    favorites: []
  },
  mutations: {
    addFavorite(state, movie) {
      state.favorites.push(movie);
    },
    removeFavorite(state, movie) {
      state.favorites = state.favorites.filter(fave => fave.id !== movie.id);
    }
  },
  actions: {
    // addFavorite({ commit, state }, movie) {
    addFavorite({ commit }, movie) {
      console.log("adding: " + movie);
      console.log(movie);
      commit("addFavorite", movie);
    },
    removeFavorite({ commit }, movie) {
      console.log("removing: " + movie);
      console.log(movie);
      commit("removeFavorite", movie);
    }
  }
});
