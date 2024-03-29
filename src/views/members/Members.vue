<template>
  <div :class="style.container">
    <div :class="style.members">
      <h2 :class="style.header">Skład</h2>
      <voice-table v-if="!isTablet" :members-data="membersData" />
      <div v-else>
        <member-mobile-tile :members-data="sopranoMembers">
          Sopran
        </member-mobile-tile>
        <member-mobile-tile :members-data="altMembers">Alt</member-mobile-tile>
        <member-mobile-tile :members-data="tenorMembers">
          Tenor
        </member-mobile-tile>
        <member-mobile-tile :members-data="bassMembers">Bas</member-mobile-tile>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  altMembers,
  bassMembers,
  sopranoMembers,
  tenorMembers,
} from './membersData';
import { Member, VoiceTableRow } from '@/typings';
import { maxMembersLength } from '@/utils';
import VoiceTable from '@/components/members/VoiceTable.vue';
import MemberMobileTile from '@/components/members/MemberMobileTile.vue';

@Component({ components: { VoiceTable, MemberMobileTile } })
export default class Members extends Vue {
  altMembers: Member[] = altMembers;
  bassMembers: Member[] = bassMembers;
  membersData: VoiceTableRow[] = [];
  sopranoMembers: Member[] = sopranoMembers;
  tenorMembers: Member[] = tenorMembers;

  tabletBreakPoint: MediaQueryList = window.matchMedia('(max-width: 900px)');
  isTablet: boolean = this.tabletBreakPoint.matches;

  mounted(): void {
    const maxLength: number = maxMembersLength(
      this.altMembers,
      this.bassMembers,
      this.sopranoMembers,
      this.tenorMembers
    );

    for (let i = 0; i < maxLength; i++) {
      this.membersData.push({
        sopran: this.sopranoMembers[i] ?? '',
        alt: this.altMembers[i] ?? '',
        tenor: this.tenorMembers[i] ?? '',
        bas: this.bassMembers[i] ?? '',
      });
    }
    this.tabletBreakPoint.onchange = this.mediaQueryHandler;
  }

  mediaQueryHandler(): void {
    this.isTablet = this.tabletBreakPoint.matches;
  }
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

.container {
  @include flex-centered;
  font-family: $main-font;
}

.members {
  margin-top: 25 * $spacing-unit;
  padding: 10 * $spacing-unit;
  width: 80%;
  background: $overlay;
  color: $secondary-color;
  display: flex;
  flex-direction: column;

  @include screen-tablet {
    margin-top: 20 * $spacing-unit;
    padding: 5 * $spacing-unit;
    width: 90%;
    border: 1px solid $secondary-color;
  }
}

.header {
  text-align: center;
  font-size: $font-size-large;
  margin-bottom: 7 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
    font-size: $font-size-medium;
  }

  @include screen-tablet-small {
    margin-bottom: 8 * $spacing-unit;
  }
}
</style>
