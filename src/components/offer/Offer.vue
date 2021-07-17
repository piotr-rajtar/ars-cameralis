<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Oferta</h1>
      <div :class="style.tileContainer">
        <div
          v-for="(item, index) in offerItems"
          :key="index"
          :class="style.tile"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { offerItems } from './offerContent';

@Component({})
export default class Offer extends Vue {
  offerItems = offerItems;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

.container {
  @include flex-centered;
}

.textContainer {
  margin: 35 * $spacing-unit 0 30 * $spacing-unit;
  padding: 15 * $spacing-unit;
  width: 80%;
  max-height: 80vh;
  background: $overlay;
  color: $secondary-color;
  overflow-y: auto;

  @include screen-tablet {
    margin: 20 * $spacing-unit 0 0;
    padding: 5 * $spacing-unit;
    width: 90%;
    max-height: 70vh;
    border: 1px solid $secondary-color;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title;
  margin-bottom: 15 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
    font-size: $font-size-title-medium;
  }
}

.tileContainer {
  @include flex-tile;
}

.tile {
  @include flex-centered;
  width: 300px;
  height: 300px;
  border-radius: 2 * $spacing-unit;
  border: 2 * $spacing-unit solid $secondary-color;
  font-size: $font-size-title-medium;
  margin: 10 * $spacing-unit;

  @include desktop {
    &:hover {
      background-color: $secondary-color;
      opacity: 0.8;
      color: $main-color;
      transition: 1s ease;
    }
  }

  @include screen-mobile {
    height: 100px;
    border: $spacing-unit solid $secondary-color;
    font-size: $font-size-medium;
    margin: 5 * $spacing-unit;
  }
}
</style>
