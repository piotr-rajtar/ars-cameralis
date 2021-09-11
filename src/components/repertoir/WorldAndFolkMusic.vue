<template>
  <single-repertoir :title="title" :items="worldAndFolkMusic" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from './SingleRepertoir.vue';
import { worldAndFolkMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class WorldAndFolkMusic extends Vue {
  worldAndFolkMusic = worldAndFolkMusic;

  get title(): string {
    return 'Muzyka świata i muzyka ludowa';
  }
}
</script>
