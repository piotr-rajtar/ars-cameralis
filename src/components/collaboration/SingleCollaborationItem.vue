<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <breadcrumbs v-if="!isScreenMobile" :breadcrumbs="breadcrumbs" />
      <h1 :class="style.header"><slot name="header" /></h1>
      <p :class="style.content"><slot name="content" /></p>
      <div :class="style.content"><slot name="contact" /></div>
      <button v-if="isScreenMobile" @click="onBackClick" :class="style.button">
        <arrow-icon :class="style.icon" />
        <span>Powrót</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumbs from '@/components/shared/Breadcrumbs.vue';
import ArrowIcon from 'vue-material-design-icons/KeyboardBackspace.vue';
import { Breadcrumb } from '@/typings';

@Component({ components: { ArrowIcon, Breadcrumbs } })
export default class SingleCollaborationItem extends Vue {
  mobileBreakPoint = window.matchMedia('(max-width: 600px)');
  isScreenMobile = this.mobileBreakPoint.matches;

  get breadcrumbs(): Array<Breadcrumb> {
    return this.$route.meta.breadcrumb;
  }

  mounted(): void {
    this.mobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  mediaQueryHandler(): void {
    this.isScreenMobile = this.mobileBreakPoint.matches;
  }

  onBackClick(): void {
    this.$router.go(-1);
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
  margin: 5 * $spacing-unit auto 10 * $spacing-unit;
  padding-bottom: 2 * $spacing-unit;
  font-size: $font-size-semi-large;
  width: fit-content;
  border-bottom: 1px solid $secondary-color;
  text-align: center;

  @include screen-mobile {
    font-size: $font-size-semi-medium;
  }
}

.content {
  margin-top: 5 * $spacing-unit;
  font-size: $font-size-paragraph;
  line-height: 9 * $spacing-unit;
  text-align: justify;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
    line-height: 1.5em;
  }
}

.button {
  @include flex-centered;
  background-color: inherit;
  border: 0.5 * $spacing-unit solid $secondary-color;
  border-radius: 2 * $spacing-unit;
  color: $secondary-color;
  font-size: $font-size-paragraph-small;
  font-family: $main-font;
  margin-top: 10 * $spacing-unit;
  padding: 2 * $spacing-unit 0;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: $secondary-color;
    opacity: 0.8;
    color: $main-color;
    transition: 1s ease;
  }
}

.icon {
  display: flex;
  margin-right: 2 * $spacing-unit;
}
</style>