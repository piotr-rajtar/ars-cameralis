<template>
  <div :class="style.container">
    <single-collaboration-item>
      <template #header>Przesłuchania do chóru</template>
      <template #content>
        Poszukujemy wszystkich głosów (sopran, mezzosopran, alt, tenor, baryton,
        bas). Gwarantujemy przyjacielską atmosferę podczas prób, rozwój głosu i
        słuchu, satysfakcję ze wspólnego śpiewania, a także udział w ciekawych
        projektach. Umiejętność czytania nut NIE jest konieczna. Czekamy na
        osoby muzykalne, wesołe, sumienne, chętne do nauki i wspólnego śpiewania
        różnorodnego repertuaru.
      </template>
      <template #contact>
        <p>
          Zainteresowanych prosimy o
          <router-link
            :to="{ name: 'Contact' }"
            :class="style.contactLink"
            aria-label="Wiadomość email (link przechodzi do sekcji kontakt w tym samym oknie)"
          >
            wiadomość e-mail
          </router-link>
          .
        </p>
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
export default class Auditions extends Vue {}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';

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
