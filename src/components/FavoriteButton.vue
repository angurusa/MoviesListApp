<template>
  <div class="movie-details-favorite">
    <button
      class="btn-primary"
      @click="addFavorite(movie)"
      v-if="!isFavorite(movie)"
    >
      Add to favorites
    </button>
    <div class="movie-details-remove-favorite" v-else>
      <strong>Favorite! </strong>
      <a @click="removeFavorite(movie)">(UnFavorite)</a>
    </div>
  </div>
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
.movie-details-favorite {
  height: 30px;
}

.movie-details-remove-favorite {
  height: 30px;
  padding: 4px 0px;
}

.movie-details-remove-favorite a {
  font-size: 12px;
  cursor: pointer;
}

@media screen and (min-width: 600px) {
  .movie-details-favorite {
    display: inline-block;
  }
}
</style>
