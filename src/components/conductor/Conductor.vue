<template>
  <div :class="style.container">
    <div :class="style.conductor">
      <h1 :class="style.header">Dyrygent</h1>
      <div :class="style.conductorItemContainer">
        <div :class="[style.conductorPhotoContainer, style.tile]">
          <!-- <img :class="style.image" src="../../assets/placeholder.jpg" /> -->
          ZDJĘCIE
        </div>
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

//wyłączone na potrzeby demo
// .conductorPhotoContainer {
//   width: 300px;
//   height: 300px;
//   margin: 5 * $spacing-unit;
//   border: none;
//   display: inline-block;
// }

.description {
  flex: 50%;
  margin-top: 5 * $spacing-unit;
  font-size: $font-size-paragraph;
  line-height: 9 * $spacing-unit;
  text-align: justify;
}

.firstParagraph {
  margin-bottom: 5 * $spacing-unit;
}

.image {
  width: 100%;
  height: 100%;
}

//na potrzeby demo
.tile {
  @include flex-centered;
  width: 300px;
  height: 300px;
  border-radius: 2 * $spacing-unit;
  font-size: $font-size-large;
  margin: 5 * $spacing-unit;
  border: 2 * $spacing-unit solid $secondary-color;

  @include screen-tablet {
    margin: 2 * $spacing-unit;
    border: 0.5 * $spacing-unit solid $secondary-color;
    width: 250px;
    height: 250px;
  }
}
</style>
