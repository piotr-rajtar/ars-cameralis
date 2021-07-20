<template>
  <header :class="style.container">
    <nav :class="style.navigation">
      <logo />
      <menu-icon
        :fill-color="iconFillColor"
        :size="35"
        :class="style.menuIcon"
        @click="toggleMobileMenu"
      />
      <menu-item-list :menuItems="menuItems" :class="style.menuItems" />
    </nav>
    <menu-item-list
      v-if="isMobileMenuVisible"
      :menuItems="menuItems"
      :class="style.menuItemsMobile"
      @itemClick="toggleMobileMenu"
    />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from './Logo.vue';
import MenuItemList from './MenuItemList.vue';
import { menuItems } from './menuData';
import { LinkListItemI } from '../../typings';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

@Component({ components: { Logo, MenuItemList, MenuIcon } })
export default class NavBar extends Vue {
  menuItems: LinkListItemI[] = menuItems;
  isMobileMenuVisible: boolean = false;

  get iconFillColor(): string {
    return '#ffffff';
  }

  toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

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

.menuItems {
  font-family: $main-font;
  @include screen-tablet {
    display: none;
  }
}

.menuItemsMobile {
  display: none;

  @include screen-tablet {
    display: flex;
  }
}

.menuIcon {
  display: none;
  cursor: pointer;

  @include screen-tablet {
    @include flex-centered;
  }
}
</style>
