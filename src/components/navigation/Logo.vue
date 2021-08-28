<template>
  <h1 :class="style.logo">
    <router-link to="/" :class="style.link">ars cameralis</router-link>
  </h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Logo extends Vue {}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/media.scss';

.link {
  text-decoration: none;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
}

.logo {
  color: $secondary-color;
  font-size: $font-size-large;
  cursor: pointer;
  font-family: $logo-font;
  font-weight: 100;

  @include header-breakpoint {
    font-size: $font-size-medium;
  }
}
</style>
