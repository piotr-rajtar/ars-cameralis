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
          <router-link :to="{ name: 'Contact' }" :class="style.contactLink">
            wiadomość e-mail
          </router-link>
          lub kontakt telefoniczny z dyrygentką – Anną Sułkowską-Migoń (numer
          poniżej).
        </p>
        <div :class="style.contactBox" @click="debouncedPhoneClick">
          <phone-icon
            :class="style.phoneIcon"
            :size="isExtraSmallScreen ? 20 : 25"
          />
          <p :class="style.contactInfo">{{ phone }}</p>
          <copy-icon
            :class="style.copyIcon"
            :size="isExtraSmallScreen ? 15 : 20"
          />
        </div>
      </template>
    </single-collaboration-item>
    <snackbar
      :isVisible="isSnackBarVisible"
      :variant="
        copiedSuccessfully ? SnackbarVariant.POSITIVE : SnackbarVariant.NEGATIVE
      "
      @close="onClose"
    >
      {{ snackbarMessage }}
    </snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleCollaborationItem from '@/components/collaboration/SingleCollaborationItem.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';
import CopyIcon from 'vue-material-design-icons/ContentCopy.vue';
import Snackbar from '@/components/shared/Snackbar.vue';
import { snackbarMessages } from './collaborationContent';
import debounce from 'lodash/debounce';
import { SnackbarVariant, SnackbarStatus } from '@/typings';
import { DebouncedFunc } from 'lodash';

@Component({
  components: { SingleCollaborationItem, PhoneIcon, CopyIcon, Snackbar },
})
export default class Auditions extends Vue {
  debouncedPhoneClick: DebouncedFunc<() => void> = debounce(
    this.onPhoneClick,
    500
  );
  smallMobileBreakPoint: MediaQueryList = window.matchMedia(
    '(max-width: 375px)'
  );
  isExtraSmallScreen: boolean = this.smallMobileBreakPoint.matches;
  phone: string = '+48 601 373 414';
  copiedSuccessfully: boolean = false;
  messageVariant: string = '';
  isSnackBarVisible: boolean = false;
  SnackbarVariant: typeof SnackbarVariant = SnackbarVariant;

  mounted(): void {
    this.smallMobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  get snackbarMessage(): string {
    return snackbarMessages[this.messageVariant];
  }

  mediaQueryHandler(): void {
    this.isExtraSmallScreen = this.smallMobileBreakPoint.matches;
  }

  onPhoneClick(): void {
    navigator.clipboard
      .writeText(this.phone)
      .then(() => {
        this.copiedSuccessfully = true;
        this.messageVariant = SnackbarStatus.COPY_SUCCESS;
        this.isSnackBarVisible = true;
        setTimeout(() => {
          this.isSnackBarVisible = false;
          this.copiedSuccessfully = false;
        }, 5000);
      })
      .catch(() => {
        this.copiedSuccessfully = false;
        this.messageVariant = SnackbarStatus.COPY_ERROR;
        this.isSnackBarVisible = true;
        setTimeout(() => {
          this.isSnackBarVisible = false;
        }, 5000);
      });
  }

  onClose(): void {
    this.isSnackBarVisible = false;
  }
}
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

.contactBox {
  @include flex-aligned-center-space-between;
  letter-spacing: initial;
  margin: 15 * $spacing-unit auto 0;
  border: 0.5 * $spacing-unit solid $secondary-color;
  border-radius: 2 * $spacing-unit;
  color: $secondary-color;
  font-size: $font-size-paragraph;
  padding: 2 * $spacing-unit;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background-color: $secondary-color;
    opacity: 0.8;
    color: $main-color;
    transition: 1s ease;
  }

  @include screen-mobile {
    width: 100%;
  }
}

.contactInfo {
  font-size: $font-size-paragraph;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }

  @include screen-mobile-small {
    font-size: $font-size-mobile-small;
  }

  @include screen-mobile-extra-small {
    margin: 0 auto;
  }
}

.phoneIcon {
  @include flex-align-centered;
  margin-right: 3 * $spacing-unit;

  @include screen-mobile-extra-small {
    display: none;
  }
}

.copyIcon {
  @include flex-align-centered;
  margin-left: 10 * $spacing-unit;

  @include screen-mobile {
    margin-left: 6 * $spacing-unit;
  }

  @include screen-mobile-extra-small {
    margin-left: 3 * $spacing-unit;
  }
}
</style>
