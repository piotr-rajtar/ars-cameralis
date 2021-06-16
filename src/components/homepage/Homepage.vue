<template>
  <div :class="style.container">
    <img
      src="../../assets/demo1.jpg"
      alt="background image"
      :class="style.image"
    />
    <h2 :class="style.title">Lorem ipsum dolor sit amet!</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Homepage extends Vue {}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';

$title-overlay: rgba(0, 0, 0, 0.7);

.container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  position: absolute;
  color: $secondary-color;
  background: $title-overlay;
  padding: 10 * $spacing-unit;
  bottom: 50 * $spacing-unit;
  width: 100%;
  font-size: $font-size-title;
  text-align: right;
}
</style>
