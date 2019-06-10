<template>
  <div class="movie-container">
    <div class="movie-poster">
      <img
        :src="tmdbRootPath + posterSize + movie.poster_path"
        :alt="movie.title + ' poster'"
        onerror="this.onerror=null; this.src='https://image.tmdb.org/t/p/w185/or06FN3Dka5tukK1e9sl16pB3iy.jpg'"
      />
    </div>
    <div
      class="movie-details"
      :style="{
        background: `url('${tmdbRootPath +
          backdropsize +
          movie.backdrop_path}') lightgray no-repeat`,
        backgroundSize: 'cover'
      }"
    >
      <h2 class="movie-details-title">
        {{ movie.title }} {{ movie.release_date | releaseYear }}
      </h2>
      <p class="movie-details-genres">
        <span
          v-for="(genre, index) in getGenres(movie.genre_ids)"
          :key="index"
          >{{ genre }}</span
        >
      </p>
      <p class="movie-details-overview">
        {{ movie.overview }}
      </p>
      <p class="movie-details-rating">
        <span class="movie-details-rating-vote">
          <strong>Viewer Rating: </strong> {{ movie.vote_average }}/10
        </span>
        <FavoriteButton :movie="movie" />
      </p>
    </div>
  </div>
</template>

<script>
import FavoriteButton from "@/components/FavoriteButton.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  data: () => ({
    tmdbRootPath: "https://image.tmdb.org/t/p",
    posterSize: "/w185",
    backdropsize: "/w780"
  }),
  components: {
    FavoriteButton
  },
  props: {
    movie: Object
  },
  computed: {
    ...mapState({
      genres: state => state.genres
    })
  },
  methods: {
    getGenres(genreIds) {
      let genres = this.genres.filter(genre => {
        return genreIds.indexOf(genre.id) !== -1;
      });
      genres = genres.map(genre => genre.name);
      return genres;
    }
  },
  filters: {
    releaseYear: function(value) {
      if (!value) return "";
      const releaseYear = new Date(value).getFullYear();
      return `(${releaseYear})`;
    }
  }
};
</script>

<style scoped>
.movie-container {
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  height: 100%;
  margin: 20px 0px;
}

/* .movie-poster {
        display: none;
    } */

.movie-poster img {
  width: 100%;
}

.movie-details {
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-blend-mode: screen;
  flex-grow: 1;
}

.movie-details-title {
  margin-bottom: 20px;
}

.movie-details-genres {
  margin-bottom: 15px;
}

.movie-details-genres span {
  display: inline-block;
  margin-right: 10px;
  padding: 0px 5px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: white;
}

.movie-details-overview {
  flex-grow: 1;
}

.movie-details-rating {
  margin-top: 10px;
  flex-direction: column;
}

.movie-details-rating-vote {
  display: block;
  margin-right: 15px;
  margin-bottom: 10px;
}

@media screen and (min-width: 600px) {
  .movie-container {
    flex-direction: row;
    margin: 20px;
  }

  .movie-poster {
    /* display: unset; */
    width: 185px;
  }

  .movie-poster img {
    height: 100%;
    min-width: 185px;
  }

  .movie-details-rating {
    height: 30px;
    flex-direction: row;
    margin-bottom: auto;
  }

  .movie-details-rating-vote {
    display: inline-block;
    margin-bottom: 0px;
  }
}
</style>
