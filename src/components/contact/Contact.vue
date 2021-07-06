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
            :rows="4"
            :cols="50"
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
}

.textContainer {
  margin: 35 * $spacing-unit 0 30 * $spacing-unit;
  padding: 15 * $spacing-unit;
  width: 80%;
  max-height: 80vh;
  background: $overlay;
  color: $secondary-color;
  overflow-y: auto;

  @include screen-medium {
    padding: 5 * $spacing-unit;
    max-height: 70vh;
  }
}

.header {
  text-align: center;
  font-size: $font-size-title;
  margin-bottom: 15 * $spacing-unit;

  @include screen-medium {
    margin-bottom: 5 * $spacing-unit;
  }
}

.form {
  @include flex-column-centered;
}

.formControlContainer {
  @include flex-column;
  width: 70%;
  margin-bottom: 4 * $spacing-unit;
}

.label {
  color: $secondary-color;
  font-size: $font-size-title-medium;
  margin-bottom: $spacing-unit;
}

.formControl {
  background-color: inherit;
  border: $spacing-unit solid $secondary-color;
  border-radius: 2 * $spacing-unit;
  color: $secondary-color;
  font-size: $font-size-form;
}

.input {
  height: 70px;
  width: 100%;
  padding: 2 * $spacing-unit;
}

.textarea {
  resize: none;
  height: 300px;
}

.button {
  margin-top: 15 * $spacing-unit;
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
