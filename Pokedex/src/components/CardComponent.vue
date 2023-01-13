<script setup>
const props = defineProps({
  id: {
    type: Number,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },

});

</script>
<template>
  
      <p>{{ name }}</p>
       <p>{{ id }}</p> 
 
</template>
<style scoped></style>
