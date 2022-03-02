<template>
  <div :class="style.container">
    <div :class="style.conductor">
      <h2 :class="style.header">Dyrygent</h2>
      <div :class="style.conductorItemContainer">
        <div :class="style.conductorPhotoContainer">
          <img
            v-if="!isImageLoaded"
            :alt="conductorPhoto.alt"
            :class="style.image"
            :height="imageHeight"
            :src="conductorPhoto.path_thumb"
            :width="imageWidth"
          />
          <picture v-show="isImageLoaded" :class="style.finalImageContainer">
            <source :srcset="conductorPhoto.path" :type="conductorPhoto.type" />
            <source
              :srcset="conductorPhoto.path_f"
              :type="conductorPhoto.type_f"
            />
            <img
              :alt="conductorPhoto.alt"
              :class="style.image"
              :height="imageHeight"
              :src="conductorPhoto.path"
              :width="imageWidth"
              @load="onImageLoad"
            />
          </picture>
        </div>

        <div :class="style.description">
          <p :class="style.paragraph">{{ paragraph1 }}</p>
          <p>{{ paragraph2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { conductorPhoto, paragraph1, paragraph2 } from './conductorData';
import { Photo } from '@/typings';

@Component({})
export default class Conductor extends Vue {
  conductorPhoto: Photo = conductorPhoto;
  paragraph1: string = paragraph1;
  paragraph2: string = paragraph2;
  smallMobileBreakPoint: MediaQueryList = window.matchMedia(
    '(max-width: 350px)'
  );
  isExtraSmallScreen: boolean = this.smallMobileBreakPoint.matches;
  isImageLoaded: boolean = false;

  mounted(): void {
    this.smallMobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  onImageLoad(): void {
    this.isImageLoaded = true;
  }

  mediaQueryHandler(): void {
    this.isExtraSmallScreen = this.smallMobileBreakPoint.matches;
  }

  get imageWidth(): number {
    return this.isExtraSmallScreen ? 250 : 300;
  }

  get imageHeight(): number {
    return this.isExtraSmallScreen ? 369 : 438;
  }
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

.conductor {
  margin-top: 25 * $spacing-unit;
  padding: 10 * $spacing-unit;
  width: 80%;
  background: $overlay;
  color: $secondary-color;

  @include screen-tablet {
    margin-top: 20 * $spacing-unit;
    padding: 5 * $spacing-unit;
    width: 90%;
    border: 1px solid $secondary-color;
  }
}

.header {
  @include text-paragraph;
  text-align: center;
  font-size: $font-size-large;
  margin-bottom: 7 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
    font-size: $font-size-medium;
  }
}

.conductorItemContainer {
  display: flex;
  justify-content: space-between;

  @include screen-tablet {
    flex-direction: column;
    align-items: center;
  }
}

.conductorPhotoContainer {
  width: 300px;
  height: fit-content;
  border-radius: 0.5 * $spacing-unit;
  margin: 0 5 * $spacing-unit 5 * $spacing-unit;
  border: 0.5 * $spacing-unit solid $secondary-color;

  @include screen-tablet {
    margin: 2 * $spacing-unit;
  }

  @include screen-mobile-extra-small {
    width: 250px;
  }
}

.finalImageContainer {
  display: flex;
}

.description {
  @include text-paragraph;
  flex: 50%;
  font-size: $font-size-paragraph;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }
}

.paragraph {
  margin-bottom: 2em;
}

.image {
  width: 100%;
  height: auto;
}
</style>
