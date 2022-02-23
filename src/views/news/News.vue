<template>
  <div :class="style.container">
    <div :class="style.textContainer">
      <h2 :class="style.header">Aktualności</h2>
      <single-post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SinglePost from '@/components/news/SinglePost.vue';
import { posts } from './newsContent';
import { Post } from '@/typings';

@Component({ components: { SinglePost } })
export default class News extends Vue {
  posts: Post[] = posts;
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

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
</style>
