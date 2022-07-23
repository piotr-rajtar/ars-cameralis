<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <breadcrumbs v-if="!isScreenMobile" :breadcrumbs="breadcrumbs" />
      <h2 :class="style.header">{{ title }}</h2>
      <ul :class="style.list">
        <li v-for="(item, index) in items" :class="style.listItem" :key="index">
          <p :class="style.itemText">{{ item }}</p>
        </li>
      </ul>
      <button
        v-if="isScreenMobile"
        :aria-label="backButtonAriaLabel"
        :class="style.button"
        @click="onBackClick"
      >
        <arrow-icon :class="style.icon" aria-hidden="true" />
        <span>Powrót</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Breadcrumbs from '@/components/shared/Breadcrumbs.vue';
import ArrowIcon from 'vue-material-design-icons/KeyboardBackspace.vue';
import { Breadcrumb } from '@/typings';

@Component({ components: { Breadcrumbs, ArrowIcon } })
export default class SingleRepertoir extends Vue {
  @Prop({ type: String, required: true }) title!: string;
  @Prop({ type: Array, required: true }) items!: string[];
  @Prop({ type: String, required: true }) backButtonAriaLabel!: string;
  mobileBreakPoint: MediaQueryList = window.matchMedia('(max-width: 600px)');
  isScreenMobile: boolean = this.mobileBreakPoint.matches;

  mounted(): void {
    this.mobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  get breadcrumbs(): Breadcrumb[] {
    return this.$route.meta.breadcrumb;
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

.list {
  list-style-type: none;
  font-size: $font-size-paragraph;
  margin-bottom: 5 * $spacing-unit;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }
}

.listItem {
  margin: 5 * $spacing-unit 0;
  text-align: center;
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

  &:focus {
    @include focus-shadow;
  }
}

.icon {
  display: flex;
  margin-right: 2 * $spacing-unit;
}
</style>
