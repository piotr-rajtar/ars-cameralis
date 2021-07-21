<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h1 :class="style.header">Kontakt</h1>
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Repertoir extends Vue {
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
  font-family: $main-font;
}

.textContainer {
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
</style>
