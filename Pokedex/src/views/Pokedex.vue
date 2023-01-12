<script setup>
import CardComponent from "../components/CardComponent.vue";
import { usePokemonStore } from "../stores/PokemonStore";
import { onBeforeMount } from "vue";

const store = usePokemonStore();
onBeforeMount(async () => {
  await store.fetchPokemons();
});
</script>

<template>
  <header>
    <h1>Pokedex F5</h1>
    <img src="../assets/img/769px-Pokebola-pokeball-png-0.png" alt="logo-ash" />
  </header>

  <main>
    <div class="content">
      <div
        class="content__pokemons"
        v-for="pokemon in store.Pokemons.results"
        :key="pokemon"
      >
        <CardComponent
          :name="pokemon.name"
        />
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<style scooped>
@import "../assets/styles/styles.css";
</style>
