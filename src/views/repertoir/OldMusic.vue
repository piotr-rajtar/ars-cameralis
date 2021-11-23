<template>
  <single-repertoir :items="oldMusic" :title="title" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { oldMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class OldMusic extends Vue {
  oldMusic: string[] = oldMusic;

  get title(): string {
    return 'Muzyka dawna';
  }
}
</script>
