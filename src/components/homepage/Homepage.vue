<template>
  <div :class="style.container">
    <h2 :class="style.title">Lorem ipsum dolor sit amet!</h2>
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

  @include screen-medium {
    bottom: 50%;
    text-align: center;
    $font-size-title-mobile: 40px;
  }
}
</style>
