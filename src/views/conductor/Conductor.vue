<template>
  <div :class="style.container">
    <div :class="style.conductor">
      <h2 :class="style.header">Dyrygent</h2>
      <div
        v-for="conductor in conductors"
        :class="style.conductorItemContainer"
        :key="conductor.id"
      >
        <div :class="style.conductorPhotoContainer">
          <img
            v-if="!isImageLoaded"
            :alt="conductor.photo.alt"
            :class="style.image"
            :height="imageHeight"
            :src="conductor.photo.path_thumb"
            :width="imageWidth"
          />
          <picture v-show="isImageLoaded" :class="style.finalImageContainer">
            <source
              :srcset="conductor.photo.path"
              :type="conductor.photo.type"
            />
            <source
              :srcset="conductor.photo.path_f"
              :type="conductor.photo.type_f"
            />
            <img
              :alt="conductor.photo.alt"
              :class="style.image"
              :height="imageHeight"
              :src="conductor.photo.path"
              :width="imageWidth"
              @load="onImageLoad"
            />
          </picture>
        </div>

        <div :class="style.description">
          <p :class="style.paragraph">{{ conductor.description1 }}</p>
          <p>{{ conductor.description2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { conductors } from './conductorData';
import { ConductorI } from '@/typings';

@Component({})
export default class Conductor extends Vue {
  conductors: ConductorI[] = conductors;
  isImageLoaded: boolean = false;

  smallMobileBreakPoint: MediaQueryList = window.matchMedia(
    '(max-width: 350px)'
  );
  isExtraSmallScreen: boolean = this.smallMobileBreakPoint.matches;

  mounted(): void {
    this.smallMobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  get imageHeight(): number {
    return this.isExtraSmallScreen ? 369 : 438;
  }

  get imageWidth(): number {
    return this.isExtraSmallScreen ? 250 : 300;
  }

  mediaQueryHandler(): void {
    this.isExtraSmallScreen = this.smallMobileBreakPoint.matches;
  }

  onImageLoad(): void {
    this.isImageLoaded = true;
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
  margin-bottom: 25 * $spacing-unit;

  @include screen-tablet {
    flex-direction: column;
    align-items: center;
    margin-bottom: 12.5 * $spacing-unit;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.conductorPhotoContainer {
  width: 300px;
  height: 450px;
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
  height: 100%;
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
  object-fit: cover;
}
</style>
