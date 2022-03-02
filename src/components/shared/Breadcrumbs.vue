<template>
  <ol :class="style.breadcrumbs">
    <li
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="index"
      :class="style.linkItem"
    >
      <router-link :to="{ name: breadcrumb.name }" :class="style.link">
        {{ breadcrumb.title }}
      </router-link>
      <arrow-icon v-if="breadcrumb.name" :class="style.icon" />
    </li>
  </ol>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Breadcrumb } from '@/typings';
import ArrowIcon from 'vue-material-design-icons/ChevronRight.vue';

@Component({ components: { ArrowIcon } })
export default class Breadcrumbs extends Vue {
  @Prop({ type: Array, required: true }) breadcrumbs!: Breadcrumb[];
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/media.scss';
@import '@/scss/mixins.scss';

.breadcrumbs {
  list-style-type: none;
  display: inline-flex;
  color: $secondary-color;
  font-family: $main-font;
  font-size: $font-size-paragraph-small;

  @include breadcrumbs-breakpoint {
    font-size: $font-size-mobile-small;
  }
}

.linkItem {
  display: flex;

  &:last-child {
    margin-right: 0;
    pointer-events: none;
    color: $disabled-color;
  }
}

.link {
  @include text-paragraph;
  cursor: pointer;
  text-decoration: none;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
}

.icon {
  margin: 0 2 * $spacing-unit;
}
</style>
