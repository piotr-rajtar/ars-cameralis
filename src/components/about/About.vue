<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">O nas</h1>
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
  paragraph1 = paragraph1;
  paragraph2 = paragraph2;
  paragraph3 = paragraph3;
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
  margin-top: 35 * $spacing-unit;
  padding: 15 * $spacing-unit;
  width: 80%;
  max-height: 80vh;
  background: $overlay;
  color: $secondary-color;

  @include screen-medium {
    padding: 5 * $spacing-unit;
    max-height: 70vh;
    overflow-y: scroll;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title;
  margin-bottom: 15 * $spacing-unit;

  @include screen-medium {
    margin-bottom: 5 * $spacing-unit;
  }
}

.paragraph {
  margin-top: 5 * $spacing-unit;
  font-size: $font-size-paragraph;
}
</style>
