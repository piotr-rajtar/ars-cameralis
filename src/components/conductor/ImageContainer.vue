<template>
  <picture>
    <source :srcset="srcset" :type="type" />
    <img
      :class="style.image"
      :src="src"
      :alt="alt"
      :width="imageWidth"
      :height="imageHeight"
    />
  </picture>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ImageContainer extends Vue {
  @Prop({ type: String, required: true }) srcset!: string;
  @Prop({ type: String, required: true }) src!: string;
  @Prop({ type: String, required: true }) alt!: string;
  @Prop({ type: String, required: true }) type!: string;
  @Prop({ type: Number, required: true }) imageWidth!: number;
  @Prop({ type: Number, required: true }) imageHeight!: number;

  @Emit('image-loaded')
  onImageLoad(): void {
    return;
  }

  mounted(): void {
    this.$nextTick(() => {
      this.onImageLoad();
    });
  }
}
</script>

<style lang="scss" module="style">
.image {
  width: 100%;
  height: auto;
}
</style>
