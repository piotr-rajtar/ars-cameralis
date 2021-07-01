<template>
  <div :class="style.container">
    <div :class="style.members">
      <h1 :class="style.header">SKŁAD</h1>
      <table :class="style.table">
        <thead>
          <tr>
            <th :class="style.tableHeader">Sopran</th>
            <th :class="style.tableHeader">Alt</th>
            <th :class="style.tableHeader">Tenor</th>
            <th :class="style.tableHeader">Bas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in membersData" :key="index">
            <td :class="style.tableCell">
              {{ member.sopran.name ? member.sopran.name : null }}
            </td>
            <td :class="style.tableCell">
              {{ member.alt.name ? member.alt.name : null }}
            </td>
            <td :class="style.tableCell">
              {{ member.tenor.name ? member.tenor.name : null }}
            </td>
            <td :class="style.tableCell">
              {{ member.bas.name ? member.bas.name : null }}
            </td>
          </tr>
        </tbody>
      </table>
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

@Component({})
export default class Members extends Vue {
  altMembers: Member[] = altMembers;
  bassMembers: Member[] = bassMembers;
  sopranoMembers: Member[] = sopranoMembers;
  tenorMembers: Member[] = tenorMembers;

  membersData: Array<VoiceTableRow> = [];

  created(): void {
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
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

.container {
  @include flex-centered;
}

.members {
  margin: 35 * $spacing-unit 0 30 * $spacing-unit;
  padding: 15 * $spacing-unit;
  width: 80%;
  max-height: 80vh;
  background: $overlay;
  color: $secondary-color;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @include screen-medium {
    padding: 5 * $spacing-unit;
    max-height: 70vh;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title;
  margin-bottom: 15 * $spacing-unit;

  @include screen-medium {
    margin-bottom: 5 * $spacing-unit;
  }
}

.table {
  font-size: $font-size-title-medium;
  text-align: center;
}

.tableHeader {
  padding-bottom: 3 * $spacing-unit;
}

.tableCell {
  padding-top: 2 * $spacing-unit;
}
</style>
