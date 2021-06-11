<template>
  <header>
    <nav :class="style.container">
      <logo />
      <menu-item-list />
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from './Logo.vue';
import MenuItemList from './MenuItemList.vue';

@Component({ components: { Logo, MenuItemList } })
export default class NavBar extends Vue {}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
.container {
  display: flex;
  padding: 3 * $spacing-unit 5 * $spacing-unit;
  justify-content: space-between;
  background-color: $main-color;
}
</style>
