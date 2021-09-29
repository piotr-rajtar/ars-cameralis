<template>
  <ul :class="style.navLinksContainer">
    <menu-item
      v-for="item in menuItems"
      :key="item.link"
      :link="item.link"
      @itemClick="onItemClick"
    >
      {{ item.name }}
    </menu-item>
  </ul>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import { LinkListItemI } from '../../typings';

@Component({ components: { MenuItem } })
export default class MenuItemList extends Vue {
  @Prop({ type: Array }) menuItems!: LinkListItemI;
  @Emit('itemClick')
  onItemClick(): void {
    return;
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

.navLinksContainer {
  @include flex-aligned-center-space-around;
  list-style-type: none;
  color: $secondary-color;
  font-size: $font-size-paragraph;
  font-family: $main-font;

  @include screen-tablet {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: $main-color;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 5 * $spacing-unit;
    font-size: $font-size-semi-medium;
  }

  @include horizontal-phone {
    flex-wrap: wrap;
    max-height: 350px;
  }

  @include horizontal-phone-small {
    max-height: 300px;
  }
}
</style>
