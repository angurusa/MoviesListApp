<template>
  <header class="top-nav" ref="topNav">
    <div class="top-nav-link">
      <router-link active-class="active" to="/" exact>Home</router-link>
    </div>
    <div class="top-nav-link">
      <router-link active-class="active" to="/popular"
        >Popular Movies</router-link
      >
    </div>
    <div class="top-nav-link">
      <router-link active-class="active" to="/top-rated"
        >Top Rated Movies</router-link
      >
    </div>
    <div class="top-nav-link">
      <router-link active-class="active" to="/now-playing"
        >Now Playing</router-link
      >
    </div>
    <div class="top-nav-link">
      <router-link active-class="active" to="/favorite"
        >Favorite Movies</router-link
      >
    </div>
    <div class="icon" @click="changeClass">
      <a><img src="@/assets/hamburger-menu.svg"/></a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    changeClass() {
      const topNav = this.$refs.topNav;
      topNav.className =
        topNav.className === "top-nav"
          ? topNav.className + " responsive"
          : "top-nav";
    }
  }
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  padding: 0;
  display: flex;
  overflow: hidden;
  background-color: #333;
  margin: 20px 0px;

  overflow: hidden;
}

.top-nav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.top-nav a:hover:not(.active) {
  background-color: #111;
}

.top-nav a.active {
  background-color: #4caf50;
}

@media screen and (max-width: 600px) {
  .top-nav .top-nav-link:not(:first-child) {
    display: none;
  }

  .top-nav .icon {
    float: right;
    display: block;
    margin-left: auto;
  }

  .top-nav.responsive {
    position: relative;
  }
  .top-nav.responsive .top-nav-link {
    display: block;
  }
  .top-nav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .top-nav.responsive {
    flex-direction: column;
    display: block;
    text-align: left;
  }
}

@media screen and (min-width: 600px) {
  .top-nav {
    width: unset;
    margin: 20px;
    flex-direction: row;
  }

  .top-nav-link:first-child {
    margin: auto 0px;
  }

  .top-nav > div:nth-child(5) {
    margin-left: auto;
  }

  .top-nav .icon {
    display: none;
  }
}
</style>
