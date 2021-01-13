<template>
  <div id="app">
    <div class="column is-4 is-offset-4">
      <router-link :to="{ name: 'home' }">
        <span class="icon">
          <i class="fas fa-home fa-2x"></i>
        </span>
      </router-link>
      <img src="@/assets/logos/pokedex.png" alt="pokedex" />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
