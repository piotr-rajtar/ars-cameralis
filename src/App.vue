<template>
  <div id="app" :class="style.container">
    <nav-bar :class="style.header" />
    <main :class="style.mainContent">
      <router-view />
    </main>
    <footer-bar :class="[style.footer, isFooterHidden ? style.hidden : '']" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/navigation/NavBar.vue';
import FooterBar from './components/footer/FooterBar.vue';

@Component({ components: { NavBar, FooterBar } })
export default class App extends Vue {
  get isFooterHidden(): boolean {
    return this.$route.name === 'Homepage' ? true : false;
  }
}
</script>

<style lang="scss" module="style">
@import './scss/globals.scss';
@import './scss/variables.scss';
@import './scss/media.scss';

.container {
  background-image: url('/images/background.avif'),
    url('/images/background_f.webp');
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @include screen-mobile {
    background-color: contain, no-repeat $main-color;
    background-image: url('/images/background_mobile.avif'),
      url('/images/background_mobile_f.webp');
  }
}

.header,
.footer {
  flex-shrink: 0;
}

.mainContent {
  flex-grow: 1;
}

.hidden {
  display: none;
}
</style>
