<template>
  <single-repertoir :items="centuryMusic" :title="title" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { centuryMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class CenturyMusic extends Vue {
  centuryMusic: string[] = centuryMusic;

  get title(): string {
    return 'Muzyka XX-XXI wieku';
  }
}
</script>
