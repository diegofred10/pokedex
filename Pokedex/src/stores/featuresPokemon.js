import { defineStore } from "pinia";

export const usePokemonFeaturesStore = defineStore({
    id: 'PokemonsFeatures',
    state:()=>({
        PokemonsFeatures: []
    }),
    actions:{
        async fetchPokemonsFeatures(){
        await fetch('https://pokeapi.co/api/v2/pokemon/1/')
            .then(res=> res.json())
            .then(data => {
                this.PokemonsFeatures = data
            })
            console.log(this.PokemonsFeatures);
        },
        getPokemonsById(id){
            return this.PokemonsFeatures.find(pokemon => pokemon.id === id)
        }

    }

})