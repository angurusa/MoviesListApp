<template>
  <button
    class="movie-details-favorite"
    @click="addFavorite(movie)"
    v-if="!isFavorite(movie)"
  >
    Add to favorites
  </button>
  <span v-else>
    <strong>Favorite! </strong>
    <a @click="removeFavorite(movie)" class="remove_favorite">(UnFavorite)</a>
  </span>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "FavoriteButton",
  props: {
    movie: Object
  },
  computed: mapState({
    favorites: state => state.favorites
  }),
  methods: {
    ...mapActions(["addFavorite", "removeFavorite"]),
    isFavorite: function(movie) {
      return this.favorites.filter(fave => fave.id === movie.id).length > 0;
    }
  }
};
</script>

<style scoped>
	button.movie-details-favorite {
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

	.remove_favorite {
		font-size: 12px;
    cursor: pointer;
	}
</style>
