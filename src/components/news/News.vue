<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Aktualności</h1>
      <div :class="style.posterContainer">
        <img
          v-if="!isImageLoaded"
          :class="style.image"
          src="/images/thumbs/poster_thumb.webp"
          alt="Niebieski plakat z napisem chór zapraszający do dołączenia do
            zespołu. Informuje o datach przesłuchań które będą jedynastego i
            osiemnastego października o godzinie osiemnastej piętnaście w instytucie
            muzykologii uniwersytetu jagiellońskiego przy ulicy westerplatte
            dziesięć."
          :width="400"
          :height="500"
        />
        <picture v-show="isImageLoaded" :class="style.finalImageContainer">
          <source :srcset="imageMainSource" type="image/avif" />
          <source :srcset="imageFallbackSource" type="image/webp" />
          <img
            :class="style.image"
            :src="imageMainSource"
            alt="Niebieski plakat z napisem chór zapraszający do dołączenia do
            zespołu. Informuje o datach przesłuchań które będą jedynastego i
            osiemnastego października o godzinie osiemnastej piętnaście w instytucie
            muzykologii uniwersytetu jagiellońskiego przy ulicy westerplatte
            dziesięć."
            :width="400"
            :height="500"
            @load="onImageLoad"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class News extends Vue {
  mobileBreakPoint = window.matchMedia('(max-width: 600px)');
  isScreenMobile = this.mobileBreakPoint.matches;
  isImageLoaded: boolean = false;

  mounted(): void {
    this.mobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  onImageLoad(): void {
    this.isImageLoaded = true;
  }

  mediaQueryHandler(): void {
    this.isScreenMobile = this.mobileBreakPoint.matches;
  }

  get imageMainSource(): string {
    return this.isScreenMobile
      ? '/images/poster_mobile.avif'
      : '/images/poster.avif';
  }

  get imageFallbackSource(): string {
    return this.isScreenMobile
      ? '/images/poster_mobile_f.webp'
      : '/images/poster_f.webp';
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

.posterContainer {
  width: 60%;
  border-radius: 0.5 * $spacing-unit;
  border: 0.5 * $spacing-unit solid $secondary-color;
  margin: 0 auto;

  @include screen-mobile {
    width: 100%;
  }

  @include screen-mobile-extra-small {
    width: 250px;
  }
}

.finalImageContainer {
  display: flex;
}

.image {
  width: 100%;
  height: auto;
}
</style>
