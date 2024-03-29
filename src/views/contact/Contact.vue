<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h2 :class="style.header">Kontakt</h2>
      <p :class="style.description">{{ contactHeader }}</p>
      <form :class="style.form" @submit="onSubmit">
        <div :class="style.formControlContainer">
          <label :class="style.label" for="name">Imię</label>
          <input
            v-model="formName"
            id="name"
            :class="[
              style.formControl,
              style.input,
              !isNameValid ? style.invalidInput : null,
            ]"
            :maxlength="20"
            :minlength="3"
            name="name"
            placeholder="Wpisz imię"
            required
            type="text"
            @change="validateFormField(FormField.NAME)"
          />
          <span
            v-if="!isNameValid"
            :class="style.validationMessage"
            role="alert"
          >
            Imię powinno zawierać od 3 do 20 znaków.
          </span>
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="surname">Nazwisko</label>
          <input
            v-model="formSurname"
            id="surname"
            :class="[
              style.formControl,
              style.input,
              !isSurnameValid ? style.invalidInput : null,
            ]"
            :maxlength="30"
            :minlength="3"
            name="surname"
            placeholder="Wpisz nazwisko"
            required
            type="text"
            @change="validateFormField(FormField.SURNAME)"
          />
          <span
            v-if="!isSurnameValid"
            :class="style.validationMessage"
            role="alert"
          >
            Nazwisko powinno zawierać od 3 do 30 znaków.
          </span>
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="email">Email</label>
          <input
            v-model="formEmail"
            id="email"
            :class="[
              style.formControl,
              style.input,
              !isEmailValid ? style.invalidInput : null,
            ]"
            name="email"
            placeholder="Wpisz adres email"
            required
            type="email"
            @change="validateFormField(FormField.EMAIL)"
          />
          <span
            v-if="!isEmailValid"
            :class="style.validationMessage"
            role="alert"
          >
            Niepoprawny email
          </span>
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="message">Wiadomość</label>
          <textarea
            v-model="formMessage"
            id="message"
            :class="[
              style.formControl,
              style.input,
              style.textarea,
              !isMessageValid ? style.invalidInput : null,
            ]"
            :cols="20"
            :maxLength="500"
            :minlength="20"
            :rows="2"
            name="message"
            placeholder="Wpisz wiadomość"
            required
            type="text"
            @change="validateFormField(FormField.MESSAGE)"
          />
          <span
            v-if="!isMessageValid"
            :class="style.validationMessage"
            role="alert"
          >
            Wiadomość powinna zawierać od 20 do 500 znaków.
          </span>
        </div>
        <button
          :class="[style.formControl, style.button]"
          aria-label="Wyślij wiadomość"
          type="submit"
        >
          <send-icon :class="style.sendIcon" aria-hidden="true" />
          <span>Wyślij</span>
        </button>
      </form>
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
import SendIcon from 'vue-material-design-icons/EmailSend.vue';
import Snackbar from '@/components/shared/Snackbar.vue';
import { contactHeader, mail, snackbarMessages } from './contactData';
import { SnackbarVariant, SnackbarStatus, FormField } from '@/typings';
import { isEmailValid } from '@/utils';
import emailjs from 'emailjs-com';
import { debounce, DebouncedFunc } from 'lodash';

@Component({ components: { MailIcon, CopyIcon, Snackbar, SendIcon } })
export default class Contact extends Vue {
  FormField: typeof FormField = FormField;
  SnackbarVariant: typeof SnackbarVariant = SnackbarVariant;

  contactHeader: string = contactHeader;
  copiedSuccessfully: boolean = false;
  formEmail: string = '';
  formMessage: string = '';
  formName: string = '';
  formSurname: string = '';
  isEmailValid: boolean = true;
  isMessageValid: boolean = true;
  isNameValid: boolean = true;
  isSnackBarVisible: boolean = false;
  isSurnameValid: boolean = true;
  mail: string = mail;
  messageVariant: string = '';
  sentSuccessfully: boolean = false;

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
    emailjs.init(process.env.VUE_APP_EMAIL_USER_ID);
  }

  get areAllFormFieldsValid(): boolean {
    return (
      this.isNameValid &&
      this.isSurnameValid &&
      this.isMessageValid &&
      this.isEmailValid
    );
  }

  get snackbarMessage(): string {
    return snackbarMessages[this.messageVariant];
  }

  get snackbarVariant(): SnackbarVariant {
    return this.copiedSuccessfully || this.sentSuccessfully
      ? SnackbarVariant.POSITIVE
      : SnackbarVariant.NEGATIVE;
  }

  clearFormFields(): void {
    this.formName = '';
    this.formSurname = '';
    this.formEmail = '';
    this.formMessage = '';
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

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    Object.values(FormField).forEach((field: FormField) =>
      this.validateFormField(field)
    );

    if (this.areAllFormFieldsValid) {
      this.sendEmail(form);
      this.clearFormFields();
    } else {
      this.sentSuccessfully = false;
      this.messageVariant = SnackbarStatus.INVALID_FORM_DATA;
      this.isSnackBarVisible = true;

      setTimeout(() => {
        this.isSnackBarVisible = false;
      }, 5000);
    }
  }

  sendEmail(form: HTMLFormElement): void {
    try {
      emailjs.sendForm(
        process.env.VUE_APP_EMAIL_SERVICE_ID,
        process.env.VUE_APP_EMAIL_TEMPLATE_ID,
        form
      );
      this.sentSuccessfully = true;
      this.messageVariant = SnackbarStatus.SEND_SUCCESS;
      this.isSnackBarVisible = true;

      setTimeout(() => {
        this.isSnackBarVisible = false;
        this.sentSuccessfully = false;
      }, 5000);
    } catch {
      this.sentSuccessfully = false;
      this.messageVariant = SnackbarStatus.SEND_ERROR;
      this.isSnackBarVisible = true;

      setTimeout(() => {
        this.isSnackBarVisible = false;
      }, 5000);
    }
  }

  validateEmail(): void {
    isEmailValid(this.formEmail)
      ? (this.isEmailValid = true)
      : (this.isEmailValid = false);
  }

  validateFormField(field: FormField): void {
    switch (field) {
      case FormField.NAME:
        this.validateName();
        break;
      case FormField.SURNAME:
        this.validateSurname();
        break;
      case FormField.MESSAGE:
        this.validateMessage();
        break;
      case FormField.EMAIL: {
        this.validateEmail();
        break;
      }
    }
  }

  validateMessage(): void {
    this.formMessage.trim().length >= 20 &&
    this.formMessage.trim().length <= 500
      ? (this.isMessageValid = true)
      : (this.isMessageValid = false);
  }

  validateName(): void {
    this.formName.trim().length >= 3 && this.formName.trim().length <= 20
      ? (this.isNameValid = true)
      : (this.isNameValid = false);
  }

  validateSurname(): void {
    this.formSurname.trim().length >= 3 && this.formSurname.trim().length <= 30
      ? (this.isSurnameValid = true)
      : (this.isSurnameValid = false);
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
    font-size: $font-size-paragraph;
  }
}

.formControl {
  background-color: inherit;
  border: 0.5 * $spacing-unit solid $secondary-color;
  border-radius: 2 * $spacing-unit;
  color: $secondary-color;
  font-size: $font-size-paragraph;
  font-family: $main-font;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }
}

.input {
  height: 50px;
  width: 100%;
  padding: 2 * $spacing-unit;

  &:focus {
    @include focus-shadow;
  }

  &::placeholder {
    color: $placeholder-color;
  }

  @include screen-mobile {
    height: 40px;
  }
}

.invalidInput {
  border-color: $negative-color;
  &:focus {
    box-shadow: 0.5 * $spacing-unit $spacing-unit 2 * $spacing-unit
      $negative-color;
  }
}

.textarea {
  resize: none;
  height: 200px;

  &::placeholder {
    color: $placeholder-color;
  }
}

.validationMessage {
  margin-top: 2 * $spacing-unit;
  color: $negative-color;
}

.button {
  @include flex-centered;
  margin-top: 5 * $spacing-unit;
  padding: 5 * $spacing-unit 15 * $spacing-unit;
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
    padding: 2 * $spacing-unit 0;
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

.sendIcon {
  display: flex;
  margin-right: 2 * $spacing-unit;
}
</style>
