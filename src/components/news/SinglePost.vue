<template>
  <div :class="style.container">
    <p :class="style.date">{{ post.date }}</p>
    <h2 :class="style.title">{{ post.title }}</h2>
    <p :class="style.description" v-html="post.description" />
    <div v-lazyload v-if="post.image" :class="style.imageContainer">
      <img
        v-if="!isImageLoaded && post.image_thumb"
        :alt="post.image_alt"
        :class="style.image"
        :data-src="post.image_thumb"
        :height="post.image_ratio.height"
        :width="post.image_ratio.width"
      />
      <picture v-show="isImageLoaded" :class="style.picture">
        <source :data-srcset="mainImageSource" :type="post.image_type" />
        <source
          v-if="fallbackImageSource"
          :data-srcset="fallbackImageSource"
          :type="post.image_type_f"
        />
        <img
          :alt="post.image_alt"
          :class="style.image"
          :data-src="mainImageSource"
          :height="post.image_ratio.height"
          :width="post.image_ratio.width"
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

  mobileBreakPoint: MediaQueryList = window.matchMedia('(max-width: 600px)');
  isScreenMobile: boolean = this.mobileBreakPoint.matches;

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
    const desktopPath: string | null = this.post.image ?? null;
    const mobilePath: string | null = this.post.image_mobile ?? null;
    return this.isScreenMobile && mobilePath ? mobilePath : desktopPath;
  }

  get fallbackImageSource(): string | null {
    const desktopPath: string | null = this.post.image_f ?? null;
    const mobilePath: string | null = this.post.image_mobile_f ?? null;
    return this.isScreenMobile && mobilePath ? mobilePath : desktopPath;
  }
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/media.scss';

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

.picture {
  display: flex;
  width: 100%;
  background-color: $secondary-color;
}
</style>
