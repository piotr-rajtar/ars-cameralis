<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Repertuar</h1>
      <p :class="style.repertoir">{{ repertoir1 }}</p>
      <p :class="style.repertoir">{{ repertoir2 }}</p>
      <p :class="style.repertoir">{{ repertoir3 }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { repertoir1, repertoir2, repertoir3 } from './repertoirContent';

@Component({})
export default class Repertoir extends Vue {
  repertoir1 = repertoir1;
  repertoir2 = repertoir2;
  repertoir3 = repertoir3;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

.container {
  @include flex-centered;
}

.textContainer {
  margin: 35 * $spacing-unit 0 30 * $spacing-unit;
  padding: 15 * $spacing-unit;
  width: 80%;
  max-height: 80vh;
  background: $overlay;
  color: $secondary-color;
  overflow-y: auto;

  @include screen-tablet {
    margin: 20 * $spacing-unit 0 0;
    padding: 5 * $spacing-unit;
    width: 90%;
    max-height: 70vh;
    border: 1px solid $secondary-color;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title;
  margin-bottom: 15 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
    font-size: $font-size-title-medium;
  }
}

.repertoir {
  margin-top: 5 * $spacing-unit;
  font-size: $font-size-paragraph;
}
</style>
