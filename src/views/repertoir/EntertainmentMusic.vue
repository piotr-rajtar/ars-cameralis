<template>
  <single-repertoir
    :backButtonAriaLabel="backButtonAriaLabel"
    :items="entertainmentMusic"
    :title="title"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from '@/components/repertoir/SingleRepertoir.vue';
import { entertainmentMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class EntertainmentMusic extends Vue {
  entertainmentMusic: string[] = entertainmentMusic;

  get backButtonAriaLabel(): string {
    return 'Powrót do podstrony kompozycje a capella';
  }

  get title(): string {
    return 'Muzyka rozrywkowa';
  }
}
</script>
