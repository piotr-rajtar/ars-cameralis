<template>
  <header :class="style.container">
    <h1 :class="style.logo">LOGO</h1>
    <ul :class="style.navLinks">
      <li>O nas</li>
      <li>Chórzyści</li>
      <li>Repertuar</li>
      <li>Oferta</li>
      <li>Galeria</li>
      <li>Kontakt</li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NavBar extends Vue {}
</script>

<style lang="scss" module="style">
.container {
  display: flex;
  justify-content: space-around;
}

.logo {
  display: inline;
  flex: 20%;
}

.navLinks {
  list-style-type: none;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  flex: 80%;
}
</style>
