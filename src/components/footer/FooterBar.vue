<template>
  <footer :class="style.container">
    <footer-item-list :footerItems="footerItems" />
    <p :class="style.rights">Piotr Rajtar © 2021 All Rights Reserved.</p>
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
  @include flex-column-centered;
  width: 100%;
  padding: 7 * $spacing-unit 5 * $spacing-unit;
  background-color: transparent;
  color: $secondary-color;
  font-size: $font-size-paragraph-small;
  font-family: $main-font;
}

.rights {
  margin-top: 2 * $spacing-unit;
}
</style>
