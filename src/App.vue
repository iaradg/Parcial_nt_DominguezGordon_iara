<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>DOMINGUEZ_GORDON_IARA_NT2_PRIMERPARCIAL</h1>
      <br>
      <Navbar />
      <router-view></router-view>

    </div>
  </div>
</template>

<script>

import Navbar from './componentes/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  background-color: rgb(255, 255, 255);
}
h1{
  color: black;
}

</style>
