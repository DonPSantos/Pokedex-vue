<template>
  <div id="pokemon">
    <div class="card">
      <div class="card-image">
        <figure>
          <img :src="pokemon.front" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ name | upper }}</p>
            <p class="subtitle is-6">{{ pokemon.type | upper }}</p>
          </div>
        </div>

        <div class="content">
          <!-- <button class="button is-medium is-fullwidth" @click="mudarImagem">Mudar imagem</button> -->
          <router-link
            class="button is-medium is-fullwidth"
            :to="{ name: 'detalhes', params: { id: pokemon.id } }"
          >
            Detalhes
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
  created: function () {
    Axios.get(this.url).then((result) => {
      this.pokemon.type = result.data.types[0].type.name;
      this.pokemon.id = result.data.id;
      this.pokemon.front = result.data.sprites.front_default;
      this.pokemon.back = result.data.sprites.back_default;
      console.log(this.pokemon.front)
    });
  },

  data() {
    return {
      pokemon: {
        type: "",
        front: "",
        back: "",
        id:""
      },
    };
  },
  props: {
    posicao: Number,
    name: String,
    url: String,
  },
  filters: {
    upper: function (value) {
      return _.upperFirst(value);
    },
  }
};
</script>

<style scoped>
#pokemon {
  margin-top: 3%;
}
</style>