<template>
  <single-repertoir :title="title" :items="entertainmentMusic" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleRepertoir from './SingleRepertoir.vue';
import { entertainmentMusic } from './repertoirContent';

@Component({ components: { SingleRepertoir } })
export default class EntertainmentMusic extends Vue {
  entertainmentMusic = entertainmentMusic;

  get title(): string {
    return 'Muzyka rozrywkowa';
  }
}
</script>
