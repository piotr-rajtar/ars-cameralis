<template>
  <single-repertoir :title="title" :items="oldMusic" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from './SingleRepertoir.vue';
import { oldMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class OldMusic extends Vue {
  oldMusic = oldMusic;

  get title(): string {
    return 'Muzyka dawna';
  }
}
</script>
