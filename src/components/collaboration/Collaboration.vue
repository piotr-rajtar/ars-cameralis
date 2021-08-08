<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Współpraca</h1>
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
import { offerItems } from './collaborationContent';

@Component({})
export default class Collaboration extends Vue {
  offerItems = offerItems;
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
  text-align: center;

  @include desktop {
    &:hover {
      background-color: $secondary-color;
      opacity: 0.8;
      color: $main-color;
      transition: 1s ease;
    }
  }

  @include screen-mobile {
    height: 150px;
    border: $spacing-unit solid $secondary-color;
    font-size: $font-size-medium;
    margin: 5 * $spacing-unit;
  }
}
</style>
