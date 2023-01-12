<script setup>
import { usePokemonStore } from "../stores/PokemonStore";
const props = defineProps({
  id: {
    type: Number,
    default: null,
  },
  img: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  stats: {
    type: String,
    default: null,
  },
});
const showPokemon = usePokemonStore();
</script>
<template>
  
      <p>{{ name }}</p>
   
 
</template>
<style scoped></style>
