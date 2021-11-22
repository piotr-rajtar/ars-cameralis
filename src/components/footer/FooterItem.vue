<template>
  <li
    :class="[
      style.navLink,
      { [style.facebook]: name === 'facebook' },
      { [style.instagram]: name === 'instagram' },
      { [style.youtube]: name === 'youtube' },
    ]"
  >
    <a :href="link" target="_blank" rel="noreferrer">
      <component
        :is="iconType"
        :size="35"
        :class="style.icon"
        fill-color="#ffffff"
      />
    </a>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import YoutubeIcon from 'vue-material-design-icons/Youtube.vue';

@Component({ components: { FacebookIcon, InstagramIcon, YoutubeIcon } })
export default class FooterItem extends Vue {
  @Prop({ type: String }) link!: string;
  @Prop({ type: String }) name!: string;

  get iconType(): string {
    const icons: {
      [key: string]: string;
    } = {
      facebook: 'facebook-icon',
      instagram: 'instagram-icon',
      youtube: 'youtube-icon',
    };

    return icons[this.name];
  }
}
</script>

<style lang="scss" module="style">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';
@import '@/scss/media.scss';

$icon-box-size-mobile: 40px;

.navLink {
  @include flex-centered;
  margin-right: 10 * $spacing-unit;
  cursor: pointer;
  border-radius: 50%;
  width: $icon-box-size-mobile;
  height: $icon-box-size-mobile;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.1);
  }

  @include screen-tablet {
    width: $icon-box-size-mobile;
    height: $icon-box-size-mobile;
  }
}

.icon {
  display: flex;
}

.facebook {
  background-color: $facebook-color;
}

.instagram {
  background: $instagram-color;
}

.youtube {
  background-color: $youtube-color;
}
</style>
