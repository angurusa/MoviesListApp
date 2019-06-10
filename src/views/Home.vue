<template>
  <div class="home">
    <h1>Movie List!</h1>
    <p>These were the top-rated films of the 20th Century.</p>

    <ul class="movie-list">
    	<li
			v-for="(movie) in movies.results"
			:key="movie.id"
			class="movie-container"
		>
			<MovieListItem :movie="movie" />
      </li>
    </ul>
  </div>
</template>

<script>
import MovieListItem from "@/components/MovieListItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    MovieListItem
  },
  methods: {
	  ...mapActions(["fetchMovieDetails", "fetchGenreDetails"]),
  },
  computed: mapState({
    movies: state => state.movies
  }),
  created(){
	this.$store.dispatch("fetchMovieDetails");
  }
};
</script>

<style>
	h2, ul, li, p, div {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}

	.btn-primary {
		background-color: #4286f4;
		border: none;
		color: white;
		padding: 5px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
    	cursor: pointer;
	}
</style>
