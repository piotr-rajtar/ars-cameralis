<template>
  <single-repertoir
    :backButtonAriaLabel="backButtonAriaLabel"
    :items="vocalInstrumentalMusic"
    :title="title"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { vocalInstrumentalMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class VocalInstrumental extends Vue {
  vocalInstrumentalMusic: string[] = vocalInstrumentalMusic;

  get backButtonAriaLabel(): string {
    return 'Powrót do podstrony repertuar';
  }

  get title(): string {
    return 'Kompozycje wokalno-instrumentalne';
  }
}
</script>
