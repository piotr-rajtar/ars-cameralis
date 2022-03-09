<template>
  <single-repertoir
    :backButtonAriaLabel="backButtonAriaLabel"
    :items="worldAndFolkMusic"
    :title="title"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { worldAndFolkMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class WorldAndFolkMusic extends Vue {
  worldAndFolkMusic: string[] = worldAndFolkMusic;

  get backButtonAriaLabel(): string {
    return 'Powrót do podstrony kompozycje a capella';
  }

  get title(): string {
    return 'Muzyka świata i muzyka ludowa';
  }
}
</script>
