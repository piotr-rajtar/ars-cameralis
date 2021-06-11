<template>
  <ul :class="style.navLinksContainer">
    <menu-item v-for="item in menuItems" :key="item.link" :link="item.link">
      {{ item.name }}
    </menu-item>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import { menuItems } from './menuData';
import { MenuItemI } from '../../typings';

@Component({ components: { MenuItem } })
export default class MenuItemList extends Vue {
  menuItems: MenuItemI[] = menuItems;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';

$nav-link-size: 30px;

.navLinksContainer {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: $secondary-color;
  font-size: $nav-link-size;
}
</style>
