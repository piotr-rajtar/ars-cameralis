<template>
  <header :class="style.container">
    <nav :class="style.navigation">
      <logo @click.native="onDesktopNavItemClick" />
      <button
        :aria-label="menuIconAriaLabel"
        :class="style.menuButton"
        @click="toggleMobileMenu"
      >
        <menu-icon
          :class="style.menuIcon"
          :fill-color="iconFillColor"
          :size="35"
          aria-hidden="true"
        />
      </button>
      <menu-item-list
        :class="style.menuItems"
        :menu-items="menuItems"
        @itemClick="onDesktopNavItemClick"
      />
    </nav>
    <menu-item-list
      v-if="isMobileMenuVisible"
      :class="style.menuItemsMobile"
      :menu-items="menuItems"
      @itemClick="toggleMobileMenu"
    />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from './Logo.vue';
import MenuItemList from './MenuItemList.vue';
import { menuItems } from './menuData';
import { LinkListItemI } from '@/typings';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

@Component({ components: { Logo, MenuItemList, MenuIcon } })
export default class NavBar extends Vue {
  menuItems: LinkListItemI[] = menuItems;
  isMobileMenuVisible: boolean = false;

  get iconFillColor(): string {
    return '#ffffff';
  }

  get menuIconAriaLabel(): string {
    return this.isMobileMenuVisible
      ? 'Menu główne, kliknięcie zwinie listę menu'
      : 'Menu główne, kliknięcie rozwinie listę menu';
  }

  onDesktopNavItemClick(): void {
    this.isMobileMenuVisible = false;
    window.scrollTo(0, 0);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

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

.menuButton {
  border: 0;
  background-color: transparent;
}

.menuIcon {
  display: none;
  cursor: pointer;

  @include screen-tablet {
    @include flex-centered;
  }
}
</style>
