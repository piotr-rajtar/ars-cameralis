<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Repertuar</h1>
      <div :class="style.tileContainer">
        <router-link
          v-for="(item, index) in repertoirTiles"
          :key="index"
          :to="{ name: item.name }"
          :class="style.link"
        >
          <div :class="style.tile">{{ item.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { repertoirTiles } from './repertoirContent';

@Component({})
export default class Repertoir extends Vue {
  repertoirTiles = repertoirTiles;
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

.link {
  cursor: pointer;
  text-decoration: none;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
}

.tile {
  @include flex-centered;
  width: 200px;
  height: 200px;
  border-radius: 2 * $spacing-unit;
  border: $spacing-unit solid $secondary-color;
  font-size: $font-size-semi-medium;
  margin: 5 * $spacing-unit;
  padding: 2 * $spacing-unit;
  text-align: center;

  @include desktop {
    &:hover {
      background-color: $secondary-color;
      opacity: 0.8;
      color: $main-color;
      transition: 1s ease;
    }
  }
}
</style>
