import Vue from "vue";
import Vuex from "vuex";

// import movies from "./apiResults";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: {},
    favorites: [],
    genres: []
  },
  mutations: {
    addFavorite(state, movie) {
      state.favorites.push(movie);
    },
    removeFavorite(state, movie) {
      state.favorites = state.favorites.filter(fave => fave.id !== movie.id);
    },
    updateMovies(state, movies) {
      state.movies = movies;
    },
    updateGenres(state, genres) {
      state.genres = genres;
    }
  },
  actions: {
    addFavorite({ commit }, movie) {
      commit("addFavorite", movie);
    },
    removeFavorite({ commit }, movie) {
      commit("removeFavorite", movie);
    },
    async fetchMovieDetails({ commit }) {
      try {
        const genres = await Vue.http
          .get("genre/movie/list?language=en-US")
          .then(response => response.json());
        commit("updateGenres", genres.genres);

        const movies = await Vue.http
          .get("discover/movie?language=en-US&sort_by=popularity.desc&page=1")
          // .get(
          //   "discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2019-06-09"
          // )
          // .get("discover/movie?primary_release_year=2010&sort_by=vote_average.desc")
          .then(response => response.json());
        commit("updateMovies", movies);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
