import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
  id: "Pokemons",
  state: () => ({
    Pokemons: [],
  }),
  actions: {
    async fetchPokemons() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      const data = await response.json();

      this.Pokemons = data;

      console.log(this.Pokemons);
    },
    getPokemonsById(id) {
      return this.Pokemons.find((pokemon) => pokemon.id === id);
    },
  },
});
