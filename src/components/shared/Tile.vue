<template>
  <router-link
    :to="{ name: tile.name }"
    :aria-label="ariaLabel"
    :class="style.link"
  >
    <div :class="style.tile">{{ tile.title }}</div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RouterTile } from '@/typings';

@Component({})
export default class Tile extends Vue {
  @Prop({ type: Object, required: true }) tile!: RouterTile;

  get ariaLabel(): string {
    return `Otwórz ${this.tile.title} (link przechodzi do podstrony w tym samym oknie)`;
  }
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

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
