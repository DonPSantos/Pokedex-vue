<template>
  <div>
    <div class="column is-4 is-offset-4">
      <input
        type="text"
        class="input is-rounded is-info"
        placeholder="Buscar Pokémon pelo nome"
        v-model="busca"
      />

      <div v-for="(pokemon, index) in resultadoBusca" :key="pokemon.url">
        <PokemonComponent
          :posicao="index + 1"
          :name="pokemon.name"
          :url="pokemon.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import PokemonComponent from "./PokemonComponent";
export default {
  name: "App",
  data() {
    return {
      pokemons: [],
      busca: "",
    };
  },
  created: function () {
    Axios.get(this.$store.state.baseUrl +"pokemon?limit=151&offset=0").then(
      (result) => {
        this.pokemons = result.data.results;
      }
    );
  },
  components: {
    PokemonComponent,
  },
  computed: {
    resultadoBusca: function () {
      if (!this.busca.trim()) {
        return this.pokemons;
      } else {
        return this.pokemons.filter((pokemon) =>
          pokemon.name.includes(this.busca.toLowerCase())
        );
      }
    },
  },
};
</script>

<style scoped>
img {
  margin-bottom: 3%;
}
#btnBuscar {
  margin-top: 2%;
}
</style>