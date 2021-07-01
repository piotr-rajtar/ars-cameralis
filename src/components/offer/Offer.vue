<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Oferta</h1>
      <div :class="style.tileContainer">
        <div :class="style.tile">Koncerty</div>
        <div :class="style.tile">Oprawa liturgii</div>
        <div :class="style.tile">Chrzciny</div>
        <div :class="style.tile">Komunie</div>
        <div :class="style.tile">Śluby</div>
        <div :class="style.tile">Pogrzeby</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Offer extends Vue {}
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

  @include screen-medium {
    padding: 5 * $spacing-unit;
    max-height: 70vh;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title;
  margin-bottom: 15 * $spacing-unit;

  @include screen-medium {
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

  &:hover {
    background-color: $secondary-color;
    opacity: 0.8;
    color: $main-color;
    transition: 1s ease;
  }
}
</style>
