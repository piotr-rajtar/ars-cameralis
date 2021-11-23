<template>
  <single-repertoir :items="passionMusic" :title="title" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { passionMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class PassionMusic extends Vue {
  passionMusic: string[] = passionMusic;

  get title(): string {
    return 'Utwory pasyjne';
  }
}
</script>
