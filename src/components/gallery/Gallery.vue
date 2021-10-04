<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Galeria</h1>
      <div :class="style.tileContainer">
        <picture
          v-for="item in galleryMiniatures"
          :key="item.id"
          :class="style.tile"
          @click="openGallery(item.id)"
        >
          <source :srcset="item.path_f" :type="item.type" />
          <img
            :src="item.path"
            :alt="item.alt"
            :class="style.photo"
            width="200"
            height="200"
          />
        </picture>
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
import { galleryMiniatures } from './galleryContent';

@Component({ components: { ImageGallery } })
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

.tile {
  @include flex-centered;
  width: 200px;
  height: 200px;
  border-radius: 0.5 * $spacing-unit;
  border: 0.5 * $spacing-unit solid $secondary-color;
  margin: 5 * $spacing-unit;
  cursor: pointer;

  @include desktop {
    &:hover {
      transform: scale(1.1);
      transition: 1s ease;
    }
  }
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
