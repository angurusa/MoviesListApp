import Vue from "vue";
import Vuex from "vuex";

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
    async fetchMovieDetails({ commit, state, dispatch }, payload) {
      if (payload === "/favorite") {
        commit("updateMovies", { results: state.favorites });
        return;
      }

      let tmdbDiscoverPath;
      switch (payload) {
        case "/popular":
          tmdbDiscoverPath = "movie/popular?language=en-US";
          break;
        case "/top-rated":
          tmdbDiscoverPath = "movie/top_rated?language=en-US";
          break;
        case "/now-playing":
          tmdbDiscoverPath = "movie/now_playing?language=en-US";
          break;
        default:
          tmdbDiscoverPath =
            "discover/movie?certification_country=US&certification.lte=PG&sort_by=popularity.desc";
      }

      if (!state.genres || !state.genres.length) {
        dispatch("fetchGenreDetails");
      }

      try {
        const movies = await Vue.http
          .get(tmdbDiscoverPath)
          .then(response => response.json());
        commit("updateMovies", movies);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchGenreDetails({ commit }) {
      const tmdbGenrePath = "genre/movie/list?language=en-US";
      try {
        const genres = await Vue.http
          .get(tmdbGenrePath)
          .then(response => response.json());
        commit("updateGenres", genres.genres);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
