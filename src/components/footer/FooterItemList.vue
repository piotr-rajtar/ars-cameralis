<template>
  <ul :class="style.navLinksContainer">
    <footer-item
      v-for="item in footerItems"
      :key="item.link"
      :link="item.link"
      :name="item.name"
    />
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FooterItem from './FooterItem.vue';
import { LinkListItemI } from '../../typings';

@Component({ components: { FooterItem } })
export default class FooterItemList extends Vue {
  @Prop({ type: Array }) footerItems!: LinkListItemI;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';

.navLinksContainer {
  display: flex;
  list-style-type: none;
}
</style>
