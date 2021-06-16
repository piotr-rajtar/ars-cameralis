<template>
  <header :class="style.container">
    <nav :class="style.navigation">
      <logo />
      <menu-item-list :menuItems="menuItems" />
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from './Logo.vue';
import MenuItemList from './MenuItemList.vue';
import { menuItems } from './menuData';
import { LinkListItemI } from '../../typings';

@Component({ components: { Logo, MenuItemList } })
export default class NavBar extends Vue {
  menuItems: LinkListItemI[] = menuItems;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';

.container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}

.navigation {
  @include flex-space-between;
  padding: 3 * $spacing-unit 5 * $spacing-unit;
  background-color: $main-color;
}
</style>
