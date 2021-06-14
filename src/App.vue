<template>
  <div id="app">
    <nav-bar />
    <!-- <router-link /> --><!-- <router-link /> -->
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
</style>
