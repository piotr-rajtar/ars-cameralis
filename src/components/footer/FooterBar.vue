<template>
  <footer :class="style.container">
    <footer-item-list :footerItems="footerItems" />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FooterItemList from './FooterItemList.vue';
import { footerItems } from './footerData';
import { LinkListItemI } from '../../typings';

@Component({ components: { FooterItemList } })
export default class FooterBar extends Vue {
  footerItems: LinkListItemI[] = footerItems;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';

.container {
  @include flex-justify-centered;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 3 * $spacing-unit 5 * $spacing-unit;
  background-color: transparent;
}
</style>
