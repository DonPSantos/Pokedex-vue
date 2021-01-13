import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import PokemonListaComponent from './components/PokemonListaComponent'
import PokemonDetalhesComponent from './components/PokemonDetalhesComponent'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/Lista',
        name: 'pokemons',
        component: PokemonListaComponent
    },
    {
        path: '/Detalhes/:id',
        name: 'detalhes',
        component: PokemonDetalhesComponent,
        props: true
    }
]

const router = new VueRouter({
mode: 'history',
routes
})

export default router