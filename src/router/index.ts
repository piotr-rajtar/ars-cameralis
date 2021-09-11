import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Homepage from '../components/homepage/Homepage.vue';
import About from '../components/about/About.vue';
import News from '../components/news/News.vue';
import Conductor from '../components/conductor/Conductor.vue';
import Members from '../components/members/Members.vue';
import Repertoir from '../components/repertoir/Repertoir.vue';
import VocalInstrumental from '../components/repertoir/VocalInstrumental.vue';
import AcapellaTiles from '../components/repertoir/AcapellaTiles.vue';
import OldMusic from '../components/repertoir/OldMusic.vue';
import CenturyMusic from '../components/repertoir/CenturyMusic.vue';
import WorldAndFolkMusic from '../components/repertoir/WorldAndFolkMusic.vue';
import EntertainmentMusic from '../components/repertoir/EntertainmentMusic.vue';
import LiturgicalMusic from '../components/repertoir/LiturgicalMusic.vue';
import PassionMusic from '../components/repertoir/PassionMusic.vue';
import Carols from '../components/repertoir/Carols.vue';
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
    path: '/news',
    name: 'News',
    component: News,
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
    component: {
      render(component) {
        return component('router-view');
      },
    },
    children: [
      {
        path: '',
        name: 'Repertoir',
        component: Repertoir,
      },
      {
        path: 'vocal-instrumental',
        name: 'VocalInstrumental',
        component: VocalInstrumental,
        meta: {
          breadcrumb: [
            {
              title: 'Repertuar',
              name: 'Repertoir',
            },
            {
              title: 'Kompozycje wokalno-instrumentalne',
            },
          ],
        },
      },
      {
        path: 'acapella',
        component: {
          render(component) {
            return component('router-view');
          },
        },
        children: [
          {
            path: '',
            name: 'Acapella',
            component: AcapellaTiles,
            meta: {
              breadcrumb: [
                {
                  title: 'Repertuar',
                  name: 'Repertoir',
                },
                {
                  title: 'Kompozycje a cappella',
                },
              ],
            },
          },
          {
            path: 'old-music',
            name: 'OldMusic',
            component: OldMusic,
            meta: {
              breadcrumb: [
                {
                  title: 'Repertuar',
                  name: 'Repertoir',
                },
                {
                  title: 'Kompozycje a cappella',
                  name: 'Acapella',
                },
                {
                  title: 'Muzyka dawna',
                },
              ],
            },
          },
          {
            path: 'century-music',
            name: 'CenturyMusic',
            component: CenturyMusic,
            meta: {
              breadcrumb: [
                {
                  title: 'Repertuar',
                  name: 'Repertoir',
                },
                {
                  title: 'Kompozycje a cappella',
                  name: 'Acapella',
                },
                {
                  title: 'Muzyka XX-XXI wieku',
                },
              ],
            },
          },
          {
            path: 'world-and-folk-music',
            name: 'WorldAndFolkMusic',
            component: WorldAndFolkMusic,
            meta: {
              breadcrumb: [
                {
                  title: 'Repertuar',
                  name: 'Repertoir',
                },
                {
                  title: 'Kompozycje a cappella',
                  name: 'Acapella',
                },
                {
                  title: 'Muzyka świata i muzyka ludowa',
                },
              ],
            },
          },
          {
            path: 'entertainment-music',
            name: 'EntertainmentMusic',
            component: EntertainmentMusic,
            meta: {
              breadcrumb: [
                {
                  title: 'Repertuar',
                  name: 'Repertoir',
                },
                {
                  title: 'Kompozycje a cappella',
                  name: 'Acapella',
                },
                {
                  title: 'Muzyka rozrywkowa',
                },
              ],
            },
          },
          {
            path: 'liturgical-music',
            name: 'LiturgicalMusic',
            component: LiturgicalMusic,
            meta: {
              breadcrumb: [
                {
                  title: 'Repertuar',
                  name: 'Repertoir',
                },
                {
                  title: 'Kompozycje a cappella',
                  name: 'Acapella',
                },
                {
                  title: 'Repertuar liturgiczny',
                },
              ],
            },
          },
          {
            path: 'passion-music',
            name: 'PassionMusic',
            component: PassionMusic,
            meta: {
              breadcrumb: [
                {
                  title: 'Repertuar',
                  name: 'Repertoir',
                },
                {
                  title: 'Kompozycje a cappella',
                  name: 'Acapella',
                },
                {
                  title: 'Utwory pasyjne',
                },
              ],
            },
          },
          {
            path: 'carols',
            name: 'Carols',
            component: Carols,
            meta: {
              breadcrumb: [
                {
                  title: 'Repertuar',
                  name: 'Repertoir',
                },
                {
                  title: 'Kompozycje a cappella',
                  name: 'Acapella',
                },
                {
                  title: 'Kolędy',
                },
              ],
            },
          },
        ],
      },
    ],
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
  scrollBehavior(_to, _from, _savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
