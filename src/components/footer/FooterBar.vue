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
@import '../../scss/media.scss';

.container {
  @include flex-justify-centered;
  width: 100%;
  margin-top: 10px;
  padding: 7 * $spacing-unit 5 * $spacing-unit;
  background-color: transparent;

  @include desktop-big {
    position: fixed;
    bottom: 0;
  }
}
</style>
