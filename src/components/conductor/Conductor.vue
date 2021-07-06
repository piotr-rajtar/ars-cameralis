<template>
  <div :class="style.container">
    <div :class="style.conductor">
      <h1 :class="style.header">Dyrygent</h1>
      <div :class="style.conductorItemContainer">
        <div :class="[style.conductorPhotoContainer, style.tile]">
          <!-- <img :class="style.image" src="../../assets/placeholder.jpg" /> -->
          ZDJĘCIE
        </div>
        <p :class="style.description">{{ conductorDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { conductor, conductorDescription } from './conductorData';
import { Member } from '../../typings';

@Component({})
export default class Conductor extends Vue {
  conductor: Member = conductor;
  conductorDescription: string = conductorDescription;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

.container {
  @include flex-centered;
}

.conductor {
  margin: 35 * $spacing-unit 0 30 * $spacing-unit;
  padding: 15 * $spacing-unit;
  width: 80%;
  max-height: 80vh;
  background: $overlay;
  color: $secondary-color;
  overflow-y: auto;

  @include screen-mobile {
    padding: 5 * $spacing-unit;
    max-height: 70vh;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title;
  margin-bottom: 15 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
  }
}

.conductorItemContainer {
  display: flex;
  justify-content: space-between;

  @include screen-mobile {
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
  font-size: $font-size-title-medium;
  margin: 5 * $spacing-unit;
  border: 2 * $spacing-unit solid $secondary-color;
}
</style>
