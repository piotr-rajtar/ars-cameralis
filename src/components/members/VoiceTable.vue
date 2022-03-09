<template>
  <table :class="style.table">
    <caption :class="style.tableCaption">
      Tabela z listą członków chóru
    </caption>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VoiceTableRow } from '@/typings';

@Component({})
export default class VoiceTable extends Vue {
  @Prop({ type: Array, default: [] }) membersData!: VoiceTableRow[];
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

.table {
  text-align: center;
}

.tableCaption {
  font-size: 0;
}

.tableHeader {
  padding-bottom: 3 * $spacing-unit;
  font-size: $font-size-medium;
}

.tableCell {
  padding-top: 2 * $spacing-unit;
  font-size: $font-size-paragraph;
}
</style>
