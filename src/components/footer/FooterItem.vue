<template>
  <li
    :class="[
      style.navLink,
      { [style.facebook]: isFacebookIconVisible },
      { [style.instagram]: isInstagramIconVisible },
      { [style.youtube]: isYouTubeIconVisible },
    ]"
  >
    <a :href="link" target="_blank">
      <facebook-icon
        v-if="isFacebookIconVisible"
        :fill-color="iconFillColor"
        :size="65"
        :class="style.icon"
      />
      <instagram-icon
        v-if="isInstagramIconVisible"
        :fill-color="iconFillColor"
        :size="60"
        :class="style.icon"
      />
      <youtube-icon
        v-if="isYouTubeIconVisible"
        :fill-color="iconFillColor"
        :size="65"
        :class="style.icon"
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

  get iconFillColor(): string {
    return '#ffffff';
  }

  get isFacebookIconVisible(): boolean {
    return this.name === 'facebook' ? true : false;
  }

  get isInstagramIconVisible(): boolean {
    return this.name === 'instagram' ? true : false;
  }

  get isYouTubeIconVisible(): boolean {
    return this.name === 'youtube' ? true : false;
  }
}
</script>

<style lang="scss" module="style">
@import '../../scss/variables.scss';
@import '../../scss/mixins.scss';

$icon-box-size: 70px;

.navLink {
  @include flex-centered;
  margin-right: 10 * $spacing-unit;
  cursor: pointer;
  border-radius: 50%;
  width: $icon-box-size;
  height: $icon-box-size;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.1);
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
