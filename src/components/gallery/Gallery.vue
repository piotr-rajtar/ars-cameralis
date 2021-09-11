<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Galeria</h1>
      <div :class="style.tileContainer">
        <div
          v-for="(item, index) in galleryItems"
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
import { galleryItems } from './galleryContent';

@Component({})
export default class Offer extends Vue {
  galleryItems = galleryItems;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

.container {
  @include flex-centered;
  font-family: $main-font;
}

.textContainer {
  margin-top: 25 * $spacing-unit;
  padding: 10 * $spacing-unit;
  width: 80%;
  background: $overlay;
  color: $secondary-color;
  overflow-y: auto;

  @include screen-tablet {
    margin-top: 20 * $spacing-unit;
    padding: 5 * $spacing-unit;
    width: 90%;
    border: 1px solid $secondary-color;
  }
}

.header {
  text-align: center;
  font-size: $font-size-large;
  margin-bottom: 7 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
    font-size: $font-size-medium;
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
  border: $spacing-unit solid $secondary-color;
  font-size: $font-size-large;
  margin: 5 * $spacing-unit;

  @include screen-tablet-small {
    height: 250px;
    width: 250px;
    border: $spacing-unit solid $secondary-color;
    font-size: $font-size-medium;
    margin: 5 * $spacing-unit;
  }

  @include screen-tablet-small {
    height: 200px;
    width: 200px;
    border: $spacing-unit solid $secondary-color;
  }
}
</style>
