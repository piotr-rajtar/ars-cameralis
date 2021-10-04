<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Aktualności</h1>
      <picture :class="style.posterContainer">
        <source srcset="/images/poster_f.webp" type="image/webp" />
        <img
          :class="style.image"
          src="/images/poster.avif"
          alt="Niebieski plakat z napisem chór zapraszający do dołączenia do zespołu. Informuje o datach przesłuchań które będą jedynastego i osiemnastego października o godzinie osiemnastej piętnaście w instytucie muzykologii uniwersytetu jagiellońskiego przy ulicy westerplatte dziesięć."
          :width="400"
          :height="500"
        />
      </picture>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class News extends Vue {}
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
  display: flex;
  width: 60%;
  height: fit-content;
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

.image {
  width: 100%;
  height: auto;
}
</style>
