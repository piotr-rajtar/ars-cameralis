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
    <picture :class="style.imageContainer">
      <source :srcset="activeImage.path_f" :type="activeImage.type" />
      <img
        v-if="activeImage"
        :src="activeImage.path"
        :alt="activeImage.alt"
        :class="style.galleryPhoto"
      />
    </picture>
    <arrow-right
      :class="[style.icon, style.arrowIcon, style.arrowRightIcon]"
      :size="60"
      @click="setNextImage"
    />
    <div :class="style.sliderController">
      <div
        :class="[style.controller, style.controllerLeft]"
        @click="setPreviousImage"
      >
        <arrow-left
          :class="[style.controllerIcon, style.controllerIconLeft]"
          :size="30"
        />
        <p :class="style.controllerText">Poprzednie</p>
      </div>
      <div
        :class="[style.controller, style.controllerRight]"
        @click="setNextImage"
      >
        <p :class="style.controllerText">Następne</p>
        <arrow-right
          :class="[style.controllerIcon, style.controllerIconRight]"
          :size="30"
        />
      </div>
    </div>
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
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/media.scss';
@import '../../scss/mixins.scss';

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
    display: initial;
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

.sliderController {
  width: 100%;
  height: fit-content;
  position: fixed;
  bottom: 0;
  display: none;
  color: $secondary-color;

  @include screen-mobile {
    @include flex-space-between;
  }

  @include horizontal-phone {
    display: none;
  }
}

.controller {
  display: flex;
  border: 0.5 * $spacing-unit solid $secondary-color;
  padding: 2 * $spacing-unit;
  width: 48%;

  @include screen-mobile-extra-small {
    align-items: center;
  }
}

.controllerLeft {
  justify-content: flex-start;
}

.controllerRight {
  justify-content: flex-end;
}

.controllerText {
  font-size: $font-size-paragraph;

  @include screen-mobile-extra-small {
    font-size: $font-size-paragraph-small;
  }
}

.controllerIcon {
  display: flex;
}

.controllerIconLeft {
  margin-right: 2 * $spacing-unit;

  @include screen-mobile-extra-small {
    margin-right: $spacing-unit;
  }
}

.controllerIconRight {
  margin-left: 2 * $spacing-unit;

  @include screen-mobile-extra-small {
    margin-left: $spacing-unit;
  }
}
</style>
