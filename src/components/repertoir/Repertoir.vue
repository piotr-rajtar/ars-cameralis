<template>
  <div :class="style.container">
    <span>REPERTOIR</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Repertoir extends Vue {}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';

.container {
  margin-top: 100px;
  //background-image: url("paper.gif");
}
</style>
