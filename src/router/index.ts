import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Homepage from '../components/homepage/Homepage.vue';
import About from '../components/about/About.vue';
import Conductor from '../components/conductor/Conductor.vue';
import Members from '../components/members/Members.vue';
import Repertoir from '../components/repertoir/Repertoir.vue';
import Collaboration from '../components/collaboration/Collaboration.vue';
import Gallery from '../components/gallery/Gallery.vue';
import Contact from '../components/contact/Contact.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/conductor',
    name: 'Conductor',
    component: Conductor,
  },
  {
    path: '/members',
    name: 'Members',
    component: Members,
  },
  {
    path: '/repertoir',
    name: 'Repertoir',
    component: Repertoir,
  },
  {
    path: '/collaboration',
    name: 'Collaboration',
    component: Collaboration,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
