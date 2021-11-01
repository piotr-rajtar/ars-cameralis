<template>
  <div :class="style.container">
    <p :class="style.date">{{ post.date }}</p>
    <h2 :class="style.title">{{ post.title }}</h2>
    <p :class="style.description">{{ post.description }}</p>
    <div v-lazyload v-if="post.image" :class="style.imageContainer">
      <img
        v-if="!isImageLoaded"
        :class="style.image"
        :data-src="post.image_thumb"
        :alt="post.image_alt"
        :width="post.image_ratio.width"
        :height="post.image_ratio.height"
      />
      <picture v-show="isImageLoaded">
        <source :data-srcset="mainImageSource" :type="post.image_type" />
        <source :data-srcset="fallbackImageSource" :type="post.image_type_f" />
        <img
          :class="style.image"
          :data-src="mainImageSource"
          :alt="post.image_alt"
          :width="post.image_ratio.width"
          :height="post.image_ratio.height"
          @load="onImageLoad"
        />
      </picture>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Post } from '@/typings';

@Component({})
export default class SinglePost extends Vue {
  @Prop({ type: Object, required: true }) post!: Post;
  isImageLoaded: boolean = false;

  mobileBreakPoint = window.matchMedia('(max-width: 600px)');
  isScreenMobile = this.mobileBreakPoint.matches;

  mounted(): void {
    this.mobileBreakPoint.onchange = this.mediaQueryHandler;
  }

  onImageLoad(): void {
    this.isImageLoaded = true;
  }

  mediaQueryHandler(): void {
    this.isScreenMobile = this.mobileBreakPoint.matches;
  }

  get mainImageSource(): string | null {
    const desktopPath = this.post.image ?? null;
    const mobilePath = this.post.image_mobile ?? null;
    return this.isScreenMobile ? mobilePath : desktopPath;
  }

  get fallbackImageSource(): string | null {
    const desktopPath = this.post.image_f ?? null;
    const mobilePath = this.post.image_mobile_f ?? null;
    return this.isScreenMobile ? mobilePath : desktopPath;
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/media.scss';

.container {
  padding: 5 * $spacing-unit;
  margin-bottom: 10 * $spacing-unit;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @include screen-mobile {
    padding: 5 * $spacing-unit 0 0;
    margin-bottom: 5 * $spacing-unit;
  }
}

.container::before {
  content: '';
  width: 80%;
  height: 1px;
  position: absolute;
  top: 0;
  background-color: $secondary-color;
  left: 10%;
}

.date {
  font-size: $font-size-paragraph-small;
  margin-bottom: 2 * $spacing-unit;
}

.title {
  font-size: $font-size-medium;
  margin-bottom: 5 * $spacing-unit;

  @include screen-mobile {
    font-size: $font-size-semi-medium;
  }
}

.description {
  margin-bottom: 10 * $spacing-unit;
  text-align: justify;
  line-height: 1.5em;
  font-size: $font-size-paragraph;

  @include screen-mobile {
    font-size: $font-size-paragraph-small;
  }

  @include screen-mobile {
    margin-bottom: 5 * $spacing-unit;
  }
}

.image {
  width: 100%;
  height: auto;
}

.imageContainer {
  display: flex;
  width: 80%;
  margin: 0 auto;

  @include screen-mobile {
    width: 100%;
  }
}
</style>
