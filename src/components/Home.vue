<template>
  <div class="column is-4 is-offset-4">
    <div class="card">
      <div class="card-content">
        <p class="title">
          Bem vindo ao Pokédex! Para carregar a lista inicial basta selecionar a
          opção abaixo.
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <router-link
            class="button is-medium is-fullwidth"
            :to="{ name: 'pokemons' }"
          >
            Listar Pokémons
          </router-link>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>