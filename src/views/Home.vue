<template>
  <div class="home">
  	<h1>Movie List!</h1>
  	<p>These were the top-rated films of the 20th Century.</p>

  	<ul class="movie-list">
  		<li v-for="movie in movies.results">
  			<!-- TODO: All the content about the movie. -->
  			<p class="rating">
  				<span>Viewer Rating:</span># / 10
  				<button v-if="!isFavorite(movie)" class="favorite" @click="addToFavorites(movie)">Add to favorites</button>
  				<span v-else>Favorite! <a @click="true" class="remove_favorite">(UnFavorite)</a></span>
  			</p>
  			
  		</li>
  	</ul>
  </div>
</template>

<script>
// @ is an alias to /src
import FavoriteButton from "@/components/FavoriteButton.vue";
import { mapState, mapActions } from 'vuex';

export default {
  name: "home",
  components: {
    FavoriteButton
  },
  computed: mapState({
  	movies: state => state.movies,
  	favorites: state => state.favorites
  }),
  methods: {
  	...mapActions(['addFavorite']),
  	addToFavorites: function ( movie ) {
  		console.log('adding: ' + movie);
  		this.addFavorite(movie);
  	},
  	isFavorite: function ( movie ) {
  		return this.favorites.filter(fave => fave.id == movie.id).length > 0;
  	}
  }
};
</script>

<style scoped>

</style>
