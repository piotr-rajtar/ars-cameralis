<template>
  <div :class="style.container">
    <p :class="style.title">Chór kameralny</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Homepage extends Vue {}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

.container {
  height: 100vh;
  font-family: $main-font;
}

.title {
  position: absolute;
  padding: 10 * $spacing-unit;
  bottom: 50 * $spacing-unit;
  width: 100%;
  color: $secondary-color;
  background: $overlay;
  font-size: $font-size-title;
  text-align: right;

  @include screen-mobile {
    bottom: 38%;
    font-size: $font-size-large;
    padding: 2 * $spacing-unit 3 * $spacing-unit;
  }

  @include screen-mobile-extra-small {
    font-size: $font-size-medium;
  }

  @include horizontal-phone {
    bottom: 50px;
  }
}
</style>
