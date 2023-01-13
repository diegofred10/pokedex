<script setup>
    
</script>


<template>
    <nav>
        <div class="browser">
            <input type=text placeholder="Búscalos">
        </div>
      
    </nav>
  </template>
  
  <style scoped>
  nav {
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: end;
    position: sticky;
    top: 0;
    background: linear-gradient(90deg, #ffffff 10%, #B90000  90%);
    z-index: 10000;
    margin-bottom: 50px;
    border: 10px #ffffff;
  }
  
  .browser {
    margin: 0 100px 0 0;
    border: 10px #343FE1;
    
  }
 
  @media (max-width:500px) {
    nav {
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 0;
      background: linear-gradient(90deg, #ffffff 10%, #343FE1 90%);
      z-index: 10000;
      margin-bottom: 50px;
      text-align: center;
    }
  }
  </style>