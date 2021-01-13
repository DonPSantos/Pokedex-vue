<template>
  <div class="column is-4 is-offset-4">
    <div class="card">
      <div class="card-image">
        <figure>
          <img :src="pokemonDT.front" alt="Placeholder image" />
          <img :src="pokemonDT.back" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Nome</p>
            <p class="subtitle is-6">{{ pokemonDT.name | upper }}</p>

            <p class="title is-4">Tipo</p>
            <p class="subtitle is-6">{{ pokemonDT.type | upper }}</p>

            <p class="title is-4">Habilidades</p>
            <p
              class="subtitle is-6"
              v-for="habilidade in pokemonDT.habilites"
              :key="habilidade.ability.name"
            >
              {{ habilidade.ability.name }}
            </p>
          </div>
        </div>

        <div class="content">
          <router-link
            class="button is-medium is-fullwidth" :to="{ name: 'pokemons'}" >
            Voltar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Axios from "axios";

export default {
  data() {
    return {
      pokemonId: this.$route.params.id,
      pokemonDT: {
        type: "",
        front: "",
        back: "",
        id: "",
        name: "",
        habilites: [],
      },
    };
  },
  created: function () {
    Axios.get(this.$store.state.baseUrl+ "pokemon/" + this.pokemonId).then(
      (result) => {
        this.pokemonDT.id = result.data.id;
        this.pokemonDT.name = result.data.name;
        this.pokemonDT.habilites = result.data.abilities;
        this.pokemonDT.type = result.data.types[0].type.name;
        this.pokemonDT.front = result.data.sprites.front_default;
        this.pokemonDT.back = result.data.sprites.back_default;
        console.log(result.data.abilities);
      }
    );
  },
  filters: {
    upper: function (value) {
      return _.upperFirst(value);
    },
  },
};
</script>

<style scoped>
</style>