<template>
  <div :class="style.tileContainer">
    <tile v-for="(item, index) in tileList" :key="index" :tile="item" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RouterTile } from '@/typings';
import Tile from './Tile.vue';

@Component({ components: { Tile } })
export default class TileList extends Vue {
  @Prop({ type: Array, required: true }) tileList!: RouterTile[];
}
</script>

<style lang="scss" module="style">
@import '@/scss/mixins.scss';

.tileContainer {
  @include flex-tile;
}
</style>
