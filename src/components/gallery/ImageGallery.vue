<template>
  <div :class="style.gallery">
    <span :class="style.counter">
      {{ counter }}
    </span>
    <close-icon
      :class="[style.icon, style.closeIcon]"
      :size="30"
      @click="onGalleryClose"
    />
    <arrow-left
      :class="[style.icon, style.arrowIcon, style.arrowLeftIcon]"
      :size="60"
      @click="setPreviousImage"
    />
    <div :class="style.imageContainer">
      <img
        v-if="activeImage"
        :src="activeImage.path"
        :alt="activeImage.alt"
        :class="style.galleryPhoto"
        @touchstart="touchStart"
      />
    </div>
    <arrow-right
      :class="[style.icon, style.arrowIcon, style.arrowRightIcon]"
      :size="60"
      @click="setNextImage"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import ArrowRight from 'vue-material-design-icons/ChevronRight.vue';
import ArrowLeft from 'vue-material-design-icons/ChevronLeft.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import { galleryPhotos } from './galleryContent';
import { Photo } from '@/typings';

@Component({ components: { ArrowRight, ArrowLeft, CloseIcon } })
export default class ImageGallery extends Vue {
  @Prop({ type: Array, required: true }) gallery!: Photo[];
  @Prop({ type: String, required: true }) startPhotoId!: string;

  @Emit('close') onGalleryClose(): void {
    return;
  }
  galleryPhotos = galleryPhotos;
  activePhotoId: string = '1';

  mounted(): void {
    this.activePhotoId = this.startPhotoId;
  }

  get activeImage(): Photo {
    return this.galleryPhotos.find((photo) => photo.id === this.activePhotoId)!;
  }

  get counter(): string {
    return `${this.imageIndex} / ${this.galleryPhotos.length}`;
  }

  get imageIndex(): number {
    const image = this.galleryPhotos.find(
      (photo) => photo.id === this.activePhotoId
    )!;
    return this.galleryPhotos.indexOf(image) + 1;
  }

  setNextImage(): void {
    const activeImage = this.galleryPhotos.find(
      (photo) => photo.id === this.activePhotoId
    )!;
    const index = this.galleryPhotos.indexOf(activeImage);
    if (index < this.galleryPhotos.length - 1) {
      this.activePhotoId = this.galleryPhotos[index + 1].id;
    } else {
      this.activePhotoId = this.galleryPhotos[0].id;
    }
  }

  setPreviousImage(): void {
    const activeImage = this.galleryPhotos.find(
      (photo) => photo.id === this.activePhotoId
    )!;
    const index = this.galleryPhotos.indexOf(activeImage);
    if (index > 0) {
      this.activePhotoId = this.galleryPhotos[index - 1].id;
    } else {
      this.activePhotoId = this.galleryPhotos[this.galleryPhotos.length - 1].id;
    }
  }

  touchStart(touchEvent: TouchEvent): void {
    if (touchEvent.changedTouches.length !== 1) {
      // We only care if one finger is used
      return;
    }
    const posXStart = touchEvent.changedTouches[0].clientX;
    addEventListener(
      'touchend',
      (touchEvent) => this.touchEnd(touchEvent, posXStart),
      { once: true }
    );
  }

  touchEnd(touchEvent: TouchEvent, posXStart: number): void {
    if (touchEvent.changedTouches.length !== 1) {
      // We only care if one finger is used
      return;
    }
    const posXEnd = touchEvent.changedTouches[0].clientX;
    if (posXStart < posXEnd) {
      this.setPreviousImage(); // swipe right
    } else if (posXStart > posXEnd) {
      this.setNextImage(); // swipe left
    }
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/media.scss';

.gallery {
  width: 100vw;
  height: 100vh;
  background: $overlay-gallery;
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: space-between;
}

.counter {
  position: absolute;
  top: 3.5%;
  left: 50%;
  transform: translateX(-50%);
  color: $secondary-color;
  font-size: $font-size-semi-medium;
  font-weight: bold;

  @include screen-mobile {
    font-size: $font-size-paragraph;
  }

  @include horizontal-phone {
    left: 1.5%;
    top: 1.5%;
    transform: initial;
    font-size: $font-size-mobile-small;
  }
}

.imageContainer {
  cursor: pointer;
  position: relative;
  height: 80%;
  width: 80%;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;

  @include screen-mobile {
    width: 100%;
  }

  @include horizontal-phone {
    width: 90%;
    height: 90%;
    margin: 0 auto;
  }
}

.galleryPhoto {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.icon {
  color: $secondary-color;
  cursor: pointer;
  height: fit-content;

  &:hover {
    transform: scale(1.2);
    transition: 1s ease;
  }
}

.arrowIcon {
  position: relative;
  top: 46%;

  @include screen-mobile {
    display: none;
  }

  @include horizontal-phone {
    display: none;
  }
}

.arrowLeftIcon {
  margin-left: 3 * $spacing-unit;
}

.arrowRightIcon {
  margin-right: 3 * $spacing-unit;
}

.closeIcon {
  position: absolute;
  right: 3%;
  top: 3%;

  @include horizontal-phone {
    right: 1%;
    top: 2%;
  }
}
</style>
