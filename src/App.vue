<template>
  <div id="app" :class="style.container">
    <nav-bar />
    <main>
      <router-view />
    </main>
    <footer-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/navigation/NavBar.vue';
import FooterBar from './components/footer/FooterBar.vue';

@Component({ components: { NavBar, FooterBar } })
export default class App extends Vue {}
</script>

<style lang="scss" module="style">
@import './scss/globals.scss';
@import './scss/variables.scss';
@import './scss/media.scss';

.container {
  background-image: url('./assets/demo1.jpg');
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;

  @include screen-mobile {
    background-size: contain;
    background-repeat: no-repeat;
    background-color: $main-color;
  }
}
</style>
