<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">404</h1>
      <h2 :class="style.paragraph">Page not found</h2>
      <button @click="onClick" :class="style.button">
        <home-icon :class="style.icon" :size="isScreenMobile ? 25 : 40" />
        <span>Strona główna</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeIcon from 'vue-material-design-icons/Home.vue';

@Component({ components: { HomeIcon } })
export default class NotFound extends Vue {
  mobileBreakPoint = window.matchMedia('(max-width: 600px)');
  isScreenMobile = this.mobileBreakPoint.matches;

  mounted(): void {
    this.mobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  mediaQueryHandler(): void {
    this.isScreenMobile = this.mobileBreakPoint.matches;
  }

  onClick(): void {
    this.$router.push('/');
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

$page-title: 200px;
$mobile-page-title: 100px;

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
  font-size: $page-title;
  margin-bottom: 7 * $spacing-unit;
  text-decoration: underline;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
    font-size: $mobile-page-title;
  }
}

.paragraph {
  font-size: $font-size-title;
  text-align: center;

  @include screen-mobile {
    font-size: $font-size-medium;
  }
}

.button {
  @include flex-centered;
  background-color: inherit;
  border: 0.5 * $spacing-unit solid $secondary-color;
  border-radius: 2 * $spacing-unit;
  color: $secondary-color;
  font-size: $font-size-semi-large;
  font-family: $main-font;
  margin: 20 * $spacing-unit auto 0;
  padding: 4 * $spacing-unit 10 * $spacing-unit;
  cursor: pointer;

  @include screen-mobile {
    font-size: $font-size-semi-medium;
    padding: 2 * $spacing-unit 0;
    width: 100%;
  }

  @include screen-mobile-extra-small {
    font-size: $font-size-paragraph;
  }

  @include desktop {
    &:hover {
      background-color: $secondary-color;
      opacity: 0.8;
      color: $main-color;
      transition: 1s ease;
    }
  }
}

.icon {
  display: flex;
  margin-right: 8 * $spacing-unit;

  @include screen-mobile {
    margin-right: 4 * $spacing-unit;
  }
}
</style>
