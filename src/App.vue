<template>
  <div id="app">
    <header-container />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import headerContainer from './components/headerContainer/headerContainer.vue';

@Component({ components: { headerContainer } })
export default class App extends Vue {}
</script>

<style lang="scss"></style>
