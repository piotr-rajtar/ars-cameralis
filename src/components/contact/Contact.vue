<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Kontakt</h1>
      <h2 :class="style.subheader">{{ contactHeader }}</h2>
      <form :class="style.form" @submit="onSubmit">
        <div :class="style.formControlContainer">
          <label :class="style.label" for="name">Imię</label>
          <input
            :class="[
              style.formControl,
              style.input,
              !isNameValid ? style.invalidInput : null,
            ]"
            type="text"
            id="name"
            name="name"
            v-model="formName"
            :minlength="3"
            :maxlength="20"
            required
            @change="validation(FormField.NAME)"
          />
          <span v-if="!isNameValid" :class="style.validationMessage">
            Imię powinno zawierać od 3 do 20 znaków.
          </span>
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="surname">Nazwisko</label>
          <input
            :class="[
              style.formControl,
              style.input,
              !isSurnameValid ? style.invalidInput : null,
            ]"
            type="text"
            id="surname"
            name="surname"
            v-model="formSurname"
            :minlength="3"
            :maxlength="30"
            required
            @change="validation(FormField.SURNAME)"
          />
          <span v-if="!isSurnameValid" :class="style.validationMessage">
            Nazwisko powinno zawierać od 3 do 30 znaków.
          </span>
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="email">Email</label>
          <input
            :class="[
              style.formControl,
              style.input,
              !isEmailValid ? style.invalidInput : null,
            ]"
            type="email"
            id="email"
            name="email"
            v-model="formEmail"
            required
            @change="validation(FormField.EMAIL)"
          />
          <span v-if="!isEmailValid" :class="style.validationMessage">
            Niepoprawny email
          </span>
        </div>
        <div :class="style.formControlContainer">
          <label :class="style.label" for="message">Wiadomość</label>
          <textarea
            :class="[
              style.formControl,
              style.input,
              style.textarea,
              !isMessageValid ? style.invalidInput : null,
            ]"
            type="text"
            id="message"
            name="message"
            :rows="2"
            :cols="20"
            v-model="formMessage"
            :minlength="20"
            :maxLength="500"
            required
            @change="validation(FormField.MESSAGE)"
          />
          <span v-if="!isMessageValid" :class="style.validationMessage">
            Wiadomość powinna zawierać od 20 do 500 znaków.
          </span>
        </div>
        <button type="submit" :class="[style.formControl, style.button]">
          Wyślij
        </button>
      </form>
      <div :class="style.contactBox" @click="debouncedEmailClick">
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
    <snackbar
      :isVisible="isSnackBarVisible"
      :variant="
        copiedSuccessfully || sentSuccessfully
          ? SnackbarVariant.POSITIVE
          : SnackbarVariant.NEGATIVE
      "
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
import Snackbar from './Snackbar.vue';
import { contactHeader, mail, snackbarMessages } from './contactData';
import { SnackbarVariant, SnackbarStatus, FormField } from '@/typings';
import { validateEmail } from '@/utils';
import emailjs from 'emailjs-com';
import debounce from 'lodash/debounce';

@Component({ components: { MailIcon, CopyIcon, Snackbar } })
export default class Contact extends Vue {
  contactHeader: string = contactHeader;
  mail: string = mail;
  isSnackBarVisible: boolean = false;
  copiedSuccessfully: boolean = false;
  sentSuccessfully: boolean = false;
  smallMobileBreakPoint = window.matchMedia('(max-width: 375px)');
  isExtraSmallScreen: boolean = this.smallMobileBreakPoint.matches;
  formName: string = '';
  formSurname: string = '';
  formEmail: string = '';
  formMessage: string = '';
  messageVariant: string = '';
  isNameValid: boolean = true;
  isSurnameValid: boolean = true;
  isMessageValid: boolean = true;
  isEmailValid: boolean = true;
  SnackbarVariant = SnackbarVariant;
  SnackbarStatus = SnackbarStatus;
  FormField = FormField;
  debouncedEmailClick = debounce(this.onEmailClick, 500);
  debouncedFormSubmit = debounce(this.onSubmit, 500);

  mounted(): void {
    this.smallMobileBreakPoint.onchange = this.mediaQueryHandler;
    emailjs.init(process.env.VUE_APP_EMAIL_USER_ID);
  }

  validation(field: FormField): void {
    switch (field) {
      case FormField.NAME:
        this.formName.trim().length >= 3 && this.formName.trim().length <= 20
          ? (this.isNameValid = true)
          : (this.isNameValid = false);
        break;
      case FormField.SURNAME:
        this.formSurname.trim().length >= 3 &&
        this.formSurname.trim().length <= 30
          ? (this.isSurnameValid = true)
          : (this.isSurnameValid = false);
        break;
      case FormField.MESSAGE:
        this.formMessage.trim().length >= 20 &&
        this.formMessage.trim().length <= 500
          ? (this.isMessageValid = true)
          : (this.isMessageValid = false);
        break;
      case FormField.EMAIL: {
        validateEmail(this.formEmail)
          ? (this.isEmailValid = true)
          : (this.isEmailValid = false);
        break;
      }
    }
  }

  get snackbarMessage(): string {
    return snackbarMessages[this.messageVariant];
  }

  mediaQueryHandler(): void {
    this.isExtraSmallScreen = this.smallMobileBreakPoint.matches;
  }

  onEmailClick(): void {
    navigator.clipboard
      .writeText(this.mail)
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

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    [
      FormField.NAME,
      FormField.SURNAME,
      FormField.EMAIL,
      FormField.MESSAGE,
    ].forEach((item: FormField) => this.validation(item));

    if (
      this.isNameValid &&
      this.isSurnameValid &&
      this.isMessageValid &&
      this.isEmailValid
    ) {
      this.sendEmail(form);
      this.formName = '';
      this.formSurname = '';
      this.formEmail = '';
      this.formMessage = '';
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
    emailjs
      .sendForm(
        process.env.VUE_APP_EMAIL_SERVICE_ID,
        process.env.VUE_APP_EMAIL_TEMPLATE_ID,
        form
      )
      .then(() => {
        this.sentSuccessfully = true;
        this.messageVariant = SnackbarStatus.SEND_SUCCESS;
        this.isSnackBarVisible = true;
        setTimeout(() => {
          this.isSnackBarVisible = false;
          this.sentSuccessfully = false;
        }, 5000);
      })
      .catch(() => {
        this.sentSuccessfully = false;
        this.messageVariant = SnackbarStatus.SEND_ERROR;
        this.isSnackBarVisible = true;
        setTimeout(() => {
          this.isSnackBarVisible = false;
        }, 5000);
      });
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

  @include screen-tablet {
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
}

.validationMessage {
  margin-top: 2 * $spacing-unit;
  color: $negative-color;
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
  font-size: $font-size-paragraph;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }

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
</style>
