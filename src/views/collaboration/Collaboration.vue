<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Współpraca</h1>
      <tile-list :tile-list="collaborationTiles" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TileList from '@/components/shared/TileList.vue';
import { collaborationTiles } from './collaborationContent';
import { RouterTile } from '@/typings';

@Component({ components: { TileList } })
export default class Collaboration extends Vue {
  collaborationTiles: RouterTile[] = collaborationTiles;
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

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
</style>
