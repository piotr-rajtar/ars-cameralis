<template>
  <single-repertoir
    :backButtonAriaLabel="backButtonAriaLabel"
    :items="liturgicalMusic"
    :title="title"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { liturgicalMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class LiturgicalMusic extends Vue {
  liturgicalMusic: string[] = liturgicalMusic;

  get backButtonAriaLabel(): string {
    return 'Powrót do podstrony kompozycje a capella';
  }

  get title(): string {
    return 'Repertuar liturgiczny (w tym ślubny)';
  }
}
</script>
