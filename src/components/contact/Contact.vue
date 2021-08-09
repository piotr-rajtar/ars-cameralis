<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Kontakt</h1>
      <h2 :class="style.subheader">{{ contactHeader }}</h2>
      <form :class="style.form">
        <div :class="style.formControlContainer">
          <label :class="style.label" for="name">Imię</label>
          <input
            :class="[style.formControl, style.input]"
            type="text"
            id="name"
          />
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="surname">Nazwisko</label>
          <input
            :class="[style.formControl, style.input]"
            type="text"
            id="surname"
          />
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="email">Email</label>
          <input
            :class="[style.formControl, style.input]"
            type="email"
            id="email"
          />
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="message">Wiadomość</label>
          <textarea
            :class="[style.formControl, style.input, style.textarea]"
            type="text"
            id="message"
            :rows="2"
            :cols="20"
          />
        </div>
        <button
          type="submit"
          :class="[style.formControl, style.button]"
          @click="onSubmit"
        >
          Wyślij
        </button>
      </form>
      <div :class="style.contactBox" @click="onEmailClick">
        <mail-icon
          :class="style.mailIcon"
          :size="isExtraSmallScreen ? 20 : 25"
        />
        <p :class="style.contactInfo">{{ mail }}</p>
        <copy-icon
          :class="style.copyIcon"
          :size="isExtraSmallScreen ? 15 : 20"
        />
      </div>
    </div>
    <div
      v-if="isSnackBarVisible"
      :class="[
        style.snackbar,
        copiedSuccessfully ? style.snackbarPositive : style.snackbarNegative,
      ]"
    >
      <p :class="style.boxInfo">{{ snackbarInfo }}</p>
      <close-icon
        :class="style.closeIcon"
        :size="isExtraSmallScreen ? 20 : 25"
        @click="onClose"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MailIcon from 'vue-material-design-icons/EmailOutline.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import CopyIcon from 'vue-material-design-icons/ContentCopy.vue';
import { contactHeader, mail } from './contactData';

@Component({ components: { MailIcon, CloseIcon, CopyIcon } })
export default class Repertoir extends Vue {
  contactHeader: string = contactHeader;
  mail: string = mail;
  isSnackBarVisible = false;
  copiedSuccessfully: boolean = false;
  smallMobileBreakPoint = window.matchMedia('(max-width: 375px)');
  isExtraSmallScreen: boolean = this.smallMobileBreakPoint.matches;

  mounted(): void {
    this.smallMobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  get snackbarInfo(): string {
    return this.copiedSuccessfully
      ? 'Skopiowano pomyślnie'
      : 'Błąd w kopiowaniu';
  }

  mediaQueryHandler(): void {
    this.isExtraSmallScreen = this.smallMobileBreakPoint.matches;
  }

  onEmailClick(): void {
    navigator.clipboard
      .writeText(this.mail)
      .then(() => {
        this.copiedSuccessfully = true;
        this.isSnackBarVisible = true;
        setTimeout(() => {
          this.isSnackBarVisible = false;
        }, 5000);
        this.copiedSuccessfully = true;
      })
      .catch((err) => {
        alert(err);
        this.copiedSuccessfully = false;
        this.isSnackBarVisible = true;
        setTimeout(() => {
          this.isSnackBarVisible = false;
        }, 5000);
      });
  }

  onClose(): void {
    this.isSnackBarVisible = false;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }
}
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

.textContainer {
  @include flex-column;
  margin-top: 25 * $spacing-unit;
  padding: 10 * $spacing-unit;
  width: 80%;
  background: $overlay;
  color: $secondary-color;
  overflow-y: auto;

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
  }
}

.subheader {
  margin-bottom: 7 * $spacing-unit;
  line-height: 36px;
  font-size: $font-size-semi-medium;
  text-align: justify;

  @include screen-mobile {
    font-size: $font-size-paragraph;
  }
}

.form {
  @include flex-column-centered;
}

.formControlContainer {
  @include flex-column;
  width: 50%;
  margin-bottom: 4 * $spacing-unit;

  @include screen-tablet {
    width: 70%;
  }

  @include screen-mobile {
    width: 100%;
  }
}

.label {
  color: $secondary-color;
  font-size: $font-size-medium;
  margin-bottom: $spacing-unit;

  @include screen-mobile {
    font-size: $font-size-semi-medium;
  }
}

.formControl {
  background-color: inherit;
  border: 0.5 * $spacing-unit solid $secondary-color;
  border-radius: 2 * $spacing-unit;
  color: $secondary-color;
  font-size: $font-size-paragraph;
  font-family: $main-font;
}

.input {
  height: 50px;
  width: 100%;
  padding: 2 * $spacing-unit;

  &:focus {
    outline: none;
    box-shadow: 0.5 * $spacing-unit $spacing-unit 2 * $spacing-unit
      $secondary-color;
  }

  @include screen-mobile {
    height: 40px;
  }
}

.textarea {
  resize: none;
  height: 200px;
}

.button {
  margin-top: 5 * $spacing-unit;
  padding: 5 * $spacing-unit 15 * $spacing-unit;
  cursor: pointer;

  &:hover {
    background-color: $secondary-color;
    opacity: 0.8;
    color: $main-color;
    transition: 1s ease;
  }
}

.boxInfo {
  font-size: $font-size-paragraph;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }
}

.contactBox {
  @include flex-aligned-center-space-between;
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
  @extend .boxInfo;

  @include screen-mobile-small {
    font-size: $font-size-mobile-small;
  }
}

.mailIcon {
  @include flex-align-centered;
  margin-right: 3 * $spacing-unit;
}

.copyIcon {
  @include flex-align-centered;
  margin-left: 10 * $spacing-unit;

  @include screen-mobile {
    margin-left: 6 * $spacing-unit;
  }
}
.snackbar {
  @include flex-centered;
  position: fixed;
  top: 0;
  border: none;
  border-radius: 2 * $spacing-unit;
  color: $secondary-color;
  font-size: $font-size-paragraph;
  padding: 2 * $spacing-unit 4 * $spacing-unit;
  width: fit-content;
  z-index: 999;
  margin-top: 5 * $spacing-unit;
}

.snackbarPositive {
  background-color: $positive-color;
}

.snackbarNegative {
  background-color: $negative-color;
}

.closeIcon {
  @include flex-align-centered;
  margin-left: 3 * $spacing-unit;
  cursor: pointer;
}
</style>
