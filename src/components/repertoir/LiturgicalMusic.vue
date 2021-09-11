<template>
  <single-repertoir :title="title" :items="liturgicalMusic" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from './SingleRepertoir.vue';
import { liturgicalMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class LiturgicalMusic extends Vue {
  liturgicalMusic = liturgicalMusic;

  get title(): string {
    return 'Repertuar liturgiczny (w tym ślubny)';
  }
}
</script>
