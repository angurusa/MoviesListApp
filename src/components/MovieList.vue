<template>
  <div
    class="movie-list"
    v-if="movies && movies.results && movies.results.length > 0"
  >
	<Pagination v-if="showPagination" :totalPages="Number(movies.total_pages)" :pageNumber="Number(pageNumber)"/>
    <div v-for="movie in movies.results" :key="movie.id">
      <MovieListItem :movie="movie" />
    </div>
  </div>
  <div class="movie-list-empty" v-else>
    <div v-if="currentPath !== '/favorites' && isLoading">Movies are loading...</div>
    <div v-else-if="currentPath !== '/favorites' && isError">Something went wrong</div>
    <div v-else>You have not added any favorites yet</div>
  </div>
</template>

<script>
import MovieListItem from "@/components/MovieListItem.vue";
import Pagination from "@/components/Pagination.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    MovieListItem,
    Pagination
  },
  methods: {
    ...mapActions(["fetchMovieDetails"])
  },
  computed: {
    ...mapState({
      movies: state => state.movies,
      isLoading: state => state.isLoading,
      isError: state => state.isError
    }),
    currentPath() {
      return this.$route.path;
    },
    pageNumber() {
        return this.$route.query.page || 1;
    },
    showPagination() {
        return (this.currentPath !== '/favorites' && this.currentPath !== '/')
    }
  },
  created() {
    this.$store.dispatch("fetchMovieDetails", this.$route);
  },
  watch: {
    $route (){
      this.$store.dispatch("fetchMovieDetails", this.$route);
    }
  }
};
</script>

<style scoped>
    .movie-list-empty {
        margin: 20px;
    }
</style>
