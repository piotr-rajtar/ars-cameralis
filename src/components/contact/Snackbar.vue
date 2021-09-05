<template>
  <div
    v-if="isVisible"
    :class="[
      style.snackbar,
      variant === SnackbarVariant.POSITIVE
        ? style.snackbarPositive
        : style.snackbarNegative,
    ]"
  >
    <p :class="style.boxInfo"><slot /></p>
    <close-icon
      :class="style.closeIcon"
      :size="isExtraSmallScreen ? 20 : 25"
      @click="onClose"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import { SnackbarVariant } from '@/typings';

@Component({ components: { CloseIcon } })
export default class Snackbar extends Vue {
  @Prop({ type: Boolean, default: false }) isVisible!: boolean;
  @Prop({ type: String, required: true }) variant!: string;
  @Prop({ type: Boolean, default: false }) isExtraSmallScreen!: boolean;

  @Emit('close') onClose(): void {
    return;
  }

  SnackbarVariant = SnackbarVariant;
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';
@import '../../scss/media.scss';

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

.boxInfo {
  font-size: $font-size-paragraph;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }
}

.closeIcon {
  @include flex-align-centered;
  margin-left: 3 * $spacing-unit;
  cursor: pointer;
}
</style>
