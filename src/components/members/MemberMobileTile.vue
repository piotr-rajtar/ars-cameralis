<template>
  <div :class="style.tile">
    <h2 :class="style.tileHeader"><slot /></h2>
    <ul :class="style.list">
      <li
        v-for="(item, index) in membersData"
        :key="index"
        :class="style.listItem"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Member } from '@/typings';

@Component({})
export default class MemberMobileTile extends Vue {
  @Prop({ type: Array, default: [] }) membersData!: Member[];
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

.tile {
  text-align: center;
  margin-bottom: 10 * $spacing-unit;
}

.tileHeader {
  margin: 0 auto;
  padding-bottom: 2 * $spacing-unit;
  font-size: $font-size-semi-large;
  width: fit-content;
  border-bottom: 1px solid $secondary-color;

  @include screen-mobile {
    font-size: $font-size-semi-medium;
  }
}

.list {
  list-style-type: none;
  font-size: $font-size-medium;
  margin-bottom: 5 * $spacing-unit;

  @include screen-mobile {
    font-size: $font-size-paragraph;
  }
}

.listItem {
  margin: 5 * $spacing-unit 0;
}
</style>
