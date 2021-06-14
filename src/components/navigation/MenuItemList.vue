<template>
  <ul :class="style.navLinksContainer">
    <menu-item v-for="item in menuItems" :key="item.link" :link="item.link">
      {{ item.name }}
    </menu-item>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import { LinkListItemI } from '../../typings';

@Component({ components: { MenuItem } })
export default class MenuItemList extends Vue {
  @Prop({ type: Array }) menuItems!: LinkListItemI;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';

$nav-link-size: 30px;

.navLinksContainer {
  @include flex-aligned-center-space-around;
  list-style-type: none;
  color: $secondary-color;
  font-size: $nav-link-size;
}
</style>
