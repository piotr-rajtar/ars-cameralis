<template>
  <single-repertoir
    :backButtonAriaLabel="backButtonAriaLabel"
    :items="passionMusic"
    :title="title"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { passionMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class PassionMusic extends Vue {
  passionMusic: string[] = passionMusic;

  get backButtonAriaLabel(): string {
    return 'Powrót do podstrony kompozycje a capella';
  }

  get title(): string {
    return 'Utwory pasyjne';
  }
}
</script>
