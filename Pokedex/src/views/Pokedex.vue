<script setup>
import NavComponent from "../components/NavComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import { usePokemonStore } from "../stores/PokemonStore";
import { usePokemonFeaturesStore } from "../stores/featuresPokemon";
import { onBeforeMount } from "vue";

const store = usePokemonStore();
const storeFeatures = usePokemonFeaturesStore();
onBeforeMount(async () => {
  await store.fetchPokemons();
  await storeFeatures.fetchPokemonsFeatures();
});
</script>

<template>
  <header>
    <h1>Pokedex F5</h1>
    <img src="../assets/img/769px-Pokebola-pokeball-png-0.png" alt="logo-ash" />
  </header>

  <main>
    <section>
      <NavComponent></NavComponent>
      <h2>HAZTE CON TODOS!</h2>
      <div class="content">
        <div
          class="content__pokemons"
          v-for="pokemon in store.Pokemons.results"
          :key="pokemon"
        >
          <CardComponent :name="pokemon.name"> </CardComponent>
        </div>
      </div>
    </section>
  </main>
</template>

<style scooped>
header {
  background-color: #b90000;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

img {
  width: 15%;
  margin: 8px 50px 8px 0;
}

h1 {
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 6rem;
  text-align: start;
}

h2 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2.2vw;
  text-align: center;
}

section {
  padding: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 25px;
  list-style: none;
}

@media (max-width: 900px) {
  .content {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  h2 {
    margin-bottom: 30px;
  }

  .content {
    grid-template-columns: 1fr;
  }

  section {
    padding: 0;
  }
}
</style>
