<template>
  <div :class="style.tile">
    <img
      v-if="!isImageLoaded"
      :class="style.photo"
      :data-src="item.path_thumb"
      :alt="item.alt"
      width="200"
      height="200"
    />
    <picture v-show="isImageLoaded" :class="style.picture">
      <source :data-srcset="item.path" :type="item.type" />
      <source :data-srcset="item.path_f" :type="item.type_f" />
      <img
        :data-src="item.path"
        :alt="item.alt"
        :class="style.photo"
        width="200"
        height="200"
        @load="onImageLoad"
      />
    </picture>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Photo } from '@/typings';

@Component({})
export default class GalleryTile extends Vue {
  @Prop({ type: Object, required: true }) item!: Photo;
  isImageLoaded: boolean = false;

  onImageLoad(): void {
    this.isImageLoaded = true;
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

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

.picture {
  width: 100%;
  height: 100%;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
