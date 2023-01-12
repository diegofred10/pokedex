<script setup>
import { usePokemonStore } from '../stores/PokemonStore';
import { onBeforeMount } from 'vue';

const showPokemon = usePokemonStore();

onBeforeMount(()=>{
  getCharacter();
})
const getCharacter = async ()=>{
  await showPokemon.fetchPokemons()
}


</script>
<template>

</template>
<style scoped>
</style>