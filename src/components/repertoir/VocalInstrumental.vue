<template>
  <single-repertoir :title="title" :items="vocalInstrumentalMusic" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from './SingleRepertoir.vue';
import { vocalInstrumentalMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class VocalInstrumental extends Vue {
  vocalInstrumentalMusic = vocalInstrumentalMusic;

  get title(): string {
    return 'Kompozycje wokalno-instrumentalne';
  }
}
</script>
