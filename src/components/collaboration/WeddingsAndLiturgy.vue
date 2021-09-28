<template>
  <div :class="style.container">
    <single-collaboration-item>
      <template #header>Śluby / Oprawa liturgii</template>
      <template #content>
        Chór Ars Cameralis chętnie włącza się w oprawę muzyczną liturgii. Mamy w
        <router-link :to="{ name: 'Repertoir' }" :class="style.contactLink">
          repertuarze
        </router-link>
        wiele utworów liturgicznych. Z przyjemnością zadbamy o piękną oprawę
        muzyczną ślubu oraz innych uroczystości rodzinnych i firmowych.
      </template>
      <template #contact>
        <p>
          Jeśli chcecie zaprosić nas do siebie, prosimy o
          <router-link :to="{ name: 'Contact' }" :class="style.contactLink">
            kontakt.
          </router-link>
        </p>
      </template>
    </single-collaboration-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleCollaborationItem from './SingleCollaborationItem.vue';

@Component({
  components: { SingleCollaborationItem },
})
export default class WeddingsAndLiturgy extends Vue {}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

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
