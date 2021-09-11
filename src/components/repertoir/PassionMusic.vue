<template>
  <single-repertoir :title="title" :items="passionMusic" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from './SingleRepertoir.vue';
import { passionMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class PassionMusic extends Vue {
  passionMusic = passionMusic;

  get title(): string {
    return 'Utwory pasyjne';
  }
}
</script>
