import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: {},
    favorites: [],
    genres: [],
    isLoading: false,
    isError: false
  },
  mutations: {
    addFavorite(state, movie) {
      state.favorites.push(movie);
    },
    removeFavorite(state, movie) {
      const index = state.favorites.findIndex(fave => fave.id === movie.id);
      index > -1 && state.favorites.splice(index, 1);
    },
    updateMovies(state, movies) {
      state.movies = movies;
    },
    updateGenres(state, genres) {
      state.genres = genres;
    },
    updateIsLoading(state, status) {
      state.isLoading = status;
    },
    updateIsError(state, status) {
      state.isError = status;
    }
  },
  actions: {
    addFavorite({ commit }, movie) {
      commit("addFavorite", movie);
    },
    removeFavorite({ commit }, movie) {
      commit("removeFavorite", movie);
    },
    async fetchMovieDetails({ commit, state, dispatch }, route) {
      if (route.path === "/favorites") {
        commit("updateMovies", { results: state.favorites });
        return;
      }

      //reset movies, isLoading and isError states
      commit("updateMovies", {});
      commit("updateIsLoading", true);
      commit("updateIsError", false);

      let tmdbDiscoverPath;
      const pageNumber = route.query && route.query.page ? route.query.page : 1;
      switch (route.path) {
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

      tmdbDiscoverPath += "&page=" + pageNumber;

      if (!state.genres || !state.genres.length) {
        dispatch("fetchGenreDetails");
      }

      try {
        const movies = await Vue.http
          .get(tmdbDiscoverPath)
          .then(response => response.json());
        commit("updateMovies", movies);
        commit("updateIsError", false);
      } catch (e) {
        console.log(e);
        commit("updateIsError", true);
      } finally {
        commit("updateIsLoading", false);
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
        commit("updateIsError", true);
      }
    }
  }
});
