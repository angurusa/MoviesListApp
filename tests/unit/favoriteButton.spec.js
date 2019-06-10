import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";

import FavoriteButton from "@/components/FavoriteButton.vue";
import dataStore from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("FavoriteButton.vue", () => {
  let store;
  let propsData;

  beforeEach(() => {
    store = dataStore;

    propsData = {
      movie: {
        vote_count: 3676,
        id: 78,
        video: false,
        vote_average: 7.9,
        title: "Blade Runner",
        popularity: 105.797529,
        poster_path:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/p64TtbZGCElxQHpAMWmDHkWJlH2.jpg",
        original_language: "en",
        original_title: "Blade Runner",
        backdrop_path:
          "https://image.tmdb.org/t/p/w533_and_h300_bestv2/k36huckDH0v3LP1zo7maFt3mJC0.jpg",
        adult: false,
        overview:
          "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        release_date: "1982-06-25",
        genres: [878, 18, 53]
      }
    };
  });

  it("adds favorite if movie is not yet favorited when clicked", () => {
    const wrapper = shallowMount(FavoriteButton, {
      propsData,
      store,
      localVue
    });

    const button = wrapper.find(".movie-details-favorite button");
    expect(button.exists()).toBe(true);
    expect(wrapper.find(".movie-details-remove-favorite").exists()).toBe(false);
    button.trigger("click");
    expect(wrapper.vm.$store.state.favorites.length).toBe(1);
  });

  it("removes a favorite when the movie is already in the favorites Array", () => {
    const wrapper = shallowMount(FavoriteButton, {
      propsData,
      store,
      localVue
    });

    const removeButton = wrapper.find(".movie-details-remove-favorite a");
    expect(removeButton.exists()).toBe(true);
    removeButton.trigger("click");
    expect(wrapper.vm.$store.state.favorites.length).toBe(0);
  });
});
