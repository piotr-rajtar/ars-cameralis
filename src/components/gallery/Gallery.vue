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
}

.textContainer {
  margin: 35 * $spacing-unit 0 30 * $spacing-unit;
  padding: 15 * $spacing-unit;
  width: 80%;
  max-height: 80vh;
  background: $overlay;
  color: $secondary-color;
  overflow-y: auto;

  @include screen-mobile {
    padding: 5 * $spacing-unit;
    max-height: 70vh;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title;
  margin-bottom: 15 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
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
  cursor: pointer;

  &:hover {
    background-color: $secondary-color;
    opacity: 0.8;
    color: $main-color;
    transition: 1s ease;
    transform: scale(1.5);
  }
}
</style>
