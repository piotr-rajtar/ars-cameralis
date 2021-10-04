<template>
  <div :class="style.container">
    <div :class="style.conductor">
      <h1 :class="style.header">Dyrygent</h1>
      <div :class="style.conductorItemContainer">
        <picture :class="style.conductorPhotoContainer">
          <source srcset="/images/conductor_f.webp" type="image/webp" />
          <img
            :class="style.image"
            src="/images/conductor.avif"
            alt="Portret dyrygentki w czarnej sukni i batutą w dłoni"
            :width="imageWidth"
            :height="imageHeight"
          />
        </picture>
        <div :class="style.description">
          <p :class="style.firstParagraph">{{ paragraph1 }}</p>
          <p>{{ paragraph2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { conductor, paragraph1, paragraph2 } from './conductorData';
import { Member } from '../../typings';

@Component({})
export default class Conductor extends Vue {
  conductor: Member = conductor;
  paragraph1: string = paragraph1;
  paragraph2: string = paragraph2;
  smallMobileBreakPoint = window.matchMedia('(max-width: 350px)');
  isExtraSmallScreen: boolean = this.smallMobileBreakPoint.matches;

  mounted(): void {
    this.smallMobileBreakPoint.onchange = this.mediaQueryHandler;
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
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

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

.conductorItemContainer {
  display: flex;
  justify-content: space-between;

  @include screen-tablet {
    flex-direction: column;
    align-items: center;
  }
}

.conductorPhotoContainer {
  @include flex-centered;
  width: 300px;
  height: fit-content;
  border-radius: 0.5 * $spacing-unit;
  margin: 5 * $spacing-unit;
  border: 0.5 * $spacing-unit solid $secondary-color;

  @include screen-tablet {
    margin: 2 * $spacing-unit;
  }

  @include screen-mobile-extra-small {
    width: 250px;
  }
}

.description {
  flex: 50%;
  margin-top: 5 * $spacing-unit;
  font-size: $font-size-paragraph;
  line-height: 9 * $spacing-unit;
  text-align: justify;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
    line-height: 1.5em;
  }
}

.firstParagraph {
  margin-bottom: 5 * $spacing-unit;
}

.image {
  width: 100%;
  height: auto;
}
</style>
