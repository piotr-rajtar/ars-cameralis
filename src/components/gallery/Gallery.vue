<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Galeria</h1>
      <div :class="style.tileContainer">
        <gallery-tile
          v-lazyload
          v-for="item in galleryMiniatures"
          :key="item.id"
          :item="item"
          @click.native="openGallery(item.id)"
        />
      </div>
    </div>
    <image-gallery
      v-if="isGalleryOpen"
      :startPhotoId="activePhotoId"
      @close="toggleGallery"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageGallery from './ImageGallery.vue';
import GalleryTile from './GalleryTile.vue';
import { galleryMiniatures } from './galleryContent';

@Component({ components: { ImageGallery, GalleryTile } })
export default class Gallery extends Vue {
  galleryMiniatures = galleryMiniatures;
  isGalleryOpen: boolean = false;
  activePhotoId: string = '';

  openGallery(id: string): void {
    this.activePhotoId = id;
    this.toggleGallery();
  }

  toggleGallery(): void {
    this.isGalleryOpen = !this.isGalleryOpen;
  }
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
</style>
