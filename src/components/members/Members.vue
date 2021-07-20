<template>
  <div :class="style.container">
    <div :class="style.members">
      <h1 :class="style.header">Skład</h1>
      <voice-table v-if="!isTablet" :membersData="membersData" />
      <div v-else>
        <member-mobile-tile :membersData="sopranoMembers">
          Sopran
        </member-mobile-tile>
        <member-mobile-tile :membersData="altMembers">Alt</member-mobile-tile>
        <member-mobile-tile :membersData="tenorMembers">
          Tenor
        </member-mobile-tile>
        <member-mobile-tile :membersData="bassMembers">Bas</member-mobile-tile>
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
import { Member, VoiceTableRow } from '../../typings';
import { maxMembersLength } from '../../utils';
import VoiceTable from './VoiceTable.vue';
import MemberMobileTile from './MemberMobileTile.vue';

@Component({ components: { VoiceTable, MemberMobileTile } })
export default class Members extends Vue {
  altMembers: Member[] = altMembers;
  bassMembers: Member[] = bassMembers;
  sopranoMembers: Member[] = sopranoMembers;
  tenorMembers: Member[] = tenorMembers;
  membersData: Array<VoiceTableRow> = [];
  tabletBreakPoint = window.matchMedia('(max-width: 900px)');
  isTablet: boolean = this.tabletBreakPoint.matches;

  mounted(): void {
    const maxLength = maxMembersLength(
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
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

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
  overflow-y: auto;

  @include screen-tablet {
    margin-top: 20 * $spacing-unit;
    padding: 5 * $spacing-unit;
    width: 90%;
    border: 1px solid $secondary-color;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title-medium;
  margin-bottom: 10 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
  }

  @include screen-tablet-small {
    margin-bottom: 8 * $spacing-unit;
  }
}
</style>
