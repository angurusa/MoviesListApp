<template>
  <div class="home">
    <h1>Movie List!</h1>
    <p>These were the top-rated films of the 20th Century.</p>

    <NavigationBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "home",
  components: {
    NavigationBar
  }
};
</script>

<style>
h2,
li,
p,
div {
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
