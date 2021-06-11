<template>
  <h1 :class="style.logo">
    <router-link to="/" :class="style.link">Ars Cameralis</router-link>
  </h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Logo extends Vue {}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';

$logo-size: 40px;

.link {
  text-decoration: none;

  &:visited,
  &:active {
    color: inherit;
  }
}

.logo {
  color: $secondary-color;
  font-size: $logo-size;
  cursor: pointer;
}
</style>
