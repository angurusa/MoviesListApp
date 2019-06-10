<template>
    <header>
        <div><router-link active-class="active" to="/" exact>Home</router-link></div>
        <div><router-link active-class="active" to="/popular">Popular Movies</router-link></div>
        <div><router-link active-class="active" to="/top-rated">Top Rated Movies</router-link></div>
        <div><router-link active-class="active" to="/now-playing">Now Playing</router-link></div>
        <div><router-link active-class="active" to="/favorite">Favorite Movies</router-link></div>        
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    header {
        margin: 20px;
        padding: 0;
        display: flex;
        overflow: hidden;
        background-color: #333;
    }

    header > div:nth-child(5) {
        margin-left: auto;
    }

    div a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    div a:hover:not(.active) {
        background-color: #111;
    }

    .active {
        background-color: #4CAF50;
    }
</style>
