import Vue from "vue";
import Vuex from "vuex"

import movies from "./apiResults";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	movies: movies,
  	favorites: []
  },
  mutations: {
  	addFavorite (state, movie) {
  		state.favorites.push(movie);
  	},
  	removeFavorite (state, movie) {
  		console.log("TODO: build remove favorites feature");
  	}
  },
  actions: {
  	addFavorite ( { commit, state }, movie ) {
  		commit('addFavorite', movie);
  	}
  }
});
