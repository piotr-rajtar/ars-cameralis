<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h2 :class="style.header">O nas</h2>
      <p :class="style.paragraph">{{ paragraph1 }}</p>
      <p :class="style.paragraph">{{ paragraph2 }}</p>
      <p :class="style.paragraph">{{ paragraph3 }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { paragraph1, paragraph2, paragraph3 } from './aboutContent';

@Component({})
export default class About extends Vue {
  paragraph1: string = paragraph1;
  paragraph2: string = paragraph2;
  paragraph3: string = paragraph3;
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

.textContainer {
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

.paragraph {
  @include text-paragraph;
  font-size: $font-size-paragraph;

  &:nth-of-type(1),
  &:nth-of-type(2) {
    margin-bottom: 2em;
  }

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }
}
</style>
