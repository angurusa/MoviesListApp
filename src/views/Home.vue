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
			<div class="movie-poster">
				<img :src="movie.poster_path" :alt="movie.title + ' poster'" />
			</div>
			<div 
				class="movie-details" 
				:style="{ 
					background: `url('${movie.backdrop_path}') lightgray no-repeat`,
					backgroundSize: 'cover'
				}"
			>
				<h2 class="movie-details-title">{{ movie.title }} {{ movie.release_date | releaseYear }}</h2>
				<p class="movie-details-genres">
					<span v-for="(genre, index) in movie.genres" :key="index">{{ genre }}</span>
				</p>
				<p class="movie-details-overview">
					{{ movie.overview }}
				</p>
				<p class="movie-details-rating">
					<span>
						<strong>Viewer Rating: </strong>
					</span>{{ movie.vote_average }}/10
					<FavoriteButton :movie="movie"/>
				</p>
			</div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import FavoriteButton from "@/components/FavoriteButton.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    FavoriteButton
  },
  computed: mapState({
    movies: state => state.movies
  }),
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
	h1, h2, ul, li, p, div {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}

	.movie-container {
		display: flex;
		border: 1px solid lightgray;
		width: 90%;
		height: 100%;
		margin: 20px auto;
	}

	.movie-poster img {
		height: 100%;
	}

	.movie-details {
		padding: 20px;
		display: flex;
		flex-direction: column;
		background-blend-mode: screen;
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
		margin-bottom: auto;
	}
</style>
