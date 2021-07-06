<template>
  <li :class="style.navLink" @click="onItemClick">
    <router-link :to="link" :class="style.link" :active-class="style.active">
      <slot />
    </router-link>
  </li>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MenuItem extends Vue {
  @Prop({ type: String }) link!: string;
  @Emit('itemClick')
  onItemClick(): void {
    return;
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/media.scss';

.navLink {
  margin-right: 10 * $spacing-unit;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  @include screen-tablet {
    margin: 3 * $spacing-unit 0 3 * $spacing-unit 5 * $spacing-unit;
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
