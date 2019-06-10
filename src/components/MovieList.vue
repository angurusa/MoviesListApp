<template>
    <div class="movie-list" v-if="movies && movies.results && movies.results.length > 0">
    	<li
			v-for="(movie) in movies.results"
			:key="movie.id"
		>
			<MovieListItem :movie="movie" />
      </li>
    </div>
	<div class="movie-list-empty" v-else>
		<div v-if="currentPath!=='/favorite'">Something went wrong</div>
		<div v-else>You have not added any favorites yet</div>
	</div>
</template>

<script>
import MovieListItem from "@/components/MovieListItem.vue";
import { mapState, mapActions } from "vuex";

export default {
    components: {
        MovieListItem,
    },
    methods: {
	    ...mapActions(["fetchMovieDetails"]),
    },
    computed: {
        ...mapState({
            movies: state => state.movies
        }),
        currentPath() {
            return this.$route.path;
        },
    },
    created(){
        this.$store.dispatch("fetchMovieDetails", this.$route.path);
    },
    watch: {
        currentPath() {
            this.$store.dispatch("fetchMovieDetails", this.$route.path);		  
        }
    }
}
</script>

<style scoped>
    .movie-list-empty {
		margin: 20px;
	}
</style>
