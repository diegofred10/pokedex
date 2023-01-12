import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
    id: 'Pokemons',
    state:()=>({
        Pokemons: []
    }),
    actions:{
        async fetchPokemons(){
        await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(res=> res.json())
            .then(data => {
                this.Pokemons = data
            })
            console.log(this.Pokemons);
        },
        getPokemonsById(id){
            return this.Pokemons.find(pokemon => pokemon.id === id)
        }

    }

})