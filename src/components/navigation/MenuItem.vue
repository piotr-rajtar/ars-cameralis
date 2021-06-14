<template>
  <li :class="style.navLink">
    <router-link :to="link" :class="style.link" :active-class="style.active">
      <slot />
    </router-link>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MenuItem extends Vue {
  @Prop({ type: String }) link!: string;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
.navLink {
  margin-right: 10 * $spacing-unit;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
}

.link {
  text-decoration: none;
  padding-bottom: $spacing-unit;

  &:visited,
  &:active {
    color: inherit;
  }
}

.active {
  border-bottom: 0.5 * $spacing-unit solid $secondary-color;
}
</style>
