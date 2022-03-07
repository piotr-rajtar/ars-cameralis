<template>
  <div :class="style.container">
    <single-collaboration-item>
      <template #header>Koncerty</template>
      <template #content>
        Śpiewanie to nasza pasja, którą chcemy dzielić się z innymi! Z radością
        przygotujemy odpowiedni program i zaprezentujemy nasze umiejętności
        podczas koncertów we wnętrzach sakralnych, salach koncertowych i podczas
        imprez plenerowych. Nasz
        <router-link
          :to="{ name: 'Repertoir' }"
          :class="style.contactLink"
          aria-label="Program (link przechodzi do sekcji repertuar w tym samym oknie)"
        >
          program
        </router-link>
        jest bardzo szeroki, z pewnością każdy znajdzie w nim coś dla siebie.
        Jesteśmy również otwarci na propozycje koncertowe w większych projektach
        wokalnych oraz wokalno-instrumentalnych.
      </template>
      <template #contact>
        <router-link
          :to="{ name: 'Contact' }"
          :class="style.contactLink"
          aria-label="Skontaktuj się z nami! (link przechodzi do sekcji kontakt w tym samym oknie)"
        >
          Skontaktuj się z nami!
        </router-link>
      </template>
    </single-collaboration-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleCollaborationItem from '@/components/collaboration/SingleCollaborationItem.vue';

@Component({
  components: { SingleCollaborationItem },
})
export default class Concerts extends Vue {}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

.container {
  @include flex-centered;
  flex-direction: column;
  font-family: $main-font;
}

.contactLink {
  cursor: pointer;
  text-decoration: none;
  border-bottom: 1px solid $secondary-color;
  display: inline-block;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
}
</style>
