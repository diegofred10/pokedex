<script setup>
import CardComponent from '../components/CardComponent.vue';
import NavComponent from '../components/NavComponent.vue';
</script>

<template>
  <header>
    <h1>Pokedex F5</h1>
    <img src="../assets/img/769px-Pokebola-pokeball-png-0.png" alt="logo-ash">
  </header>

  <main>
    <NavComponent></NavComponent>
    <h2>HAZTE CON TODOS!</h2>
    <section>
      <ul>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
        <li>
          <CardComponent></CardComponent>
        </li>
      </ul>
    </section>
  </main>
  <footer></footer>



</template>


<style scooped>
header {
  background-color: #B90000;
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 6rem;
  text-align: start;
}



h2 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.2vw;
  text-align: center;
}

section {
  padding: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 25px;
  list-style: none;
}

@media (max-width:900px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }

}

@media (max-width:700px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }

}

@media (max-width:500px) {
  h2 {
    margin-bottom: 30px;
  }

  ul {
    grid-template-columns: 1fr;

  }

  section {
    padding: 0;
  }

}
</style>