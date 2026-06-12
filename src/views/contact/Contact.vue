<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h2 :class="style.header">Kontakt</h2>
      <p :class="style.description">{{ contactHeader }}</p>
      <div
        :class="style.contactBox"
        :tabindex="0"
        aria-label="Skopiuj adres email"
        role="button"
        @click="debouncedEmailClick"
      >
        <mail-icon
          :class="style.mailIcon"
          :size="isExtraSmallScreen ? 20 : 25"
          aria-hidden="true"
        />
        <p :class="style.contactInfo">{{ mail }}</p>
        <copy-icon
          :class="style.copyIcon"
          :size="isExtraSmallScreen ? 15 : 20"
          aria-hidden="true"
        />
      </div>
    </div>
    <snackbar
      :isVisible="isSnackBarVisible"
      :variant="snackbarVariant"
      @close="onClose"
    >
      {{ snackbarMessage }}
    </snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MailIcon from 'vue-material-design-icons/EmailOutline.vue';
import CopyIcon from 'vue-material-design-icons/ContentCopy.vue';
import Snackbar from '@/components/shared/Snackbar.vue';
import { contactHeader, mail, snackbarMessages } from './contactData';
import { SnackbarVariant, SnackbarStatus } from '@/typings';
import { debounce, DebouncedFunc } from 'lodash';

@Component({ components: { MailIcon, CopyIcon, Snackbar } })
export default class Contact extends Vue {
  SnackbarVariant: typeof SnackbarVariant = SnackbarVariant;

  contactHeader: string = contactHeader;
  copiedSuccessfully: boolean = false;
  isSnackBarVisible: boolean = false;
  mail: string = mail;
  messageVariant: string = '';

  smallMobileBreakPoint: MediaQueryList = window.matchMedia(
    '(max-width: 375px)'
  );
  isExtraSmallScreen: boolean = this.smallMobileBreakPoint.matches;

  debouncedEmailClick: DebouncedFunc<() => void> = debounce(
    this.onEmailClick,
    200
  );

  mounted(): void {
    this.smallMobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  get snackbarMessage(): string {
    return snackbarMessages[this.messageVariant];
  }

  get snackbarVariant(): SnackbarVariant {
    return this.copiedSuccessfully
      ? SnackbarVariant.POSITIVE
      : SnackbarVariant.NEGATIVE;
  }

  mediaQueryHandler(): void {
    this.isExtraSmallScreen = this.smallMobileBreakPoint.matches;
  }

  onClose(): void {
    this.isSnackBarVisible = false;
  }

  onEmailClick(): void {
    try {
      navigator.clipboard.writeText(this.mail);
      this.copiedSuccessfully = true;
      this.messageVariant = SnackbarStatus.COPY_SUCCESS;
      this.isSnackBarVisible = true;

      setTimeout(() => {
        this.isSnackBarVisible = false;
        this.copiedSuccessfully = false;
      }, 5000);
    } catch {
      this.copiedSuccessfully = false;
      this.messageVariant = SnackbarStatus.COPY_ERROR;
      this.isSnackBarVisible = true;

      setTimeout(() => {
        this.isSnackBarVisible = false;
      }, 5000);
    }
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

.textContainer {
  @include flex-column;
  margin-top: 25 * $spacing-unit;
  padding: 10 * $spacing-unit;
  width: 80%;
  background: $overlay;
  color: $secondary-color;

  @include screen-tablet {
    margin-top: 20 * $spacing-unit;
    padding: 5 * $spacing-unit;
    width: 90%;
    border: 1px solid $secondary-color;
  }
}

.header {
  text-align: center;
  font-size: $font-size-large;
  margin-bottom: 7 * $spacing-unit;

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
    font-size: $font-size-medium;
  }
}

.description {
  @include text-paragraph;
  margin-bottom: 7 * $spacing-unit;
  font-size: $font-size-semi-medium;
  font-weight: normal;

  @include screen-tablet {
    font-size: $font-size-paragraph;
  }

  @include screen-mobile {
    font-size: $font-size-mobile-small;
  }
}

.contactBox {
  @include flex-aligned-center-space-between;
  margin: 5 * $spacing-unit auto 0;
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

  &:focus {
    @include focus-shadow;
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
    margin-left: 3 * $spacing-unit;
  }
}

.mailIcon {
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
