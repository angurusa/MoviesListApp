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
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    MovieListItem
  },
  computed: mapState({
    movies: state => state.movies
  })
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
</style>
