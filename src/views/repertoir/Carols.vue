<template>
  <single-repertoir :title="title" :items="carols" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { carols } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class Carols extends Vue {
  carols: string[] = carols;

  get title(): string {
    return 'Kolędy';
  }
}
</script>
