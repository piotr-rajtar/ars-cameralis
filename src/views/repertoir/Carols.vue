<template>
  <single-repertoir
    :backButtonAriaLabel="backButtonAriaLabel"
    :items="carols"
    :title="title"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { carols } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class Carols extends Vue {
  carols: string[] = carols;

  get backButtonAriaLabel(): string {
    return 'Powrót do podstrony kompozycje a capella';
  }

  get title(): string {
    return 'Kolędy';
  }
}
</script>
