import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Homepage from '@/components/homepage/Homepage.vue';
import About from '@/components/about/About.vue';
import News from '@/components/news/News.vue';
import Conductor from '@/components/conductor/Conductor.vue';
import Members from '@/components/members/Members.vue';
import Repertoir from '@/components/repertoir/Repertoir.vue';
import VocalInstrumental from '@/components/repertoir/VocalInstrumental.vue';
import AcapellaTiles from '@/components/repertoir/AcapellaTiles.vue';
import OldMusic from '@/components/repertoir/OldMusic.vue';
import CenturyMusic from '@/components/repertoir/CenturyMusic.vue';
import WorldAndFolkMusic from '@/components/repertoir/WorldAndFolkMusic.vue';
import EntertainmentMusic from '@/components/repertoir/EntertainmentMusic.vue';
import LiturgicalMusic from '@/components/repertoir/LiturgicalMusic.vue';
import PassionMusic from '@/components/repertoir/PassionMusic.vue';
import Carols from '@/components/repertoir/Carols.vue';
import Collaboration from '@/components/collaboration/Collaboration.vue';
import Auditions from '@/components/collaboration/Auditions.vue';
import Concerts from '@/components/collaboration/Concerts.vue';
import WeddingsAndLiturgy from '@/components/collaboration/WeddingsAndLiturgy.vue';
import Gallery from '@/components/gallery/Gallery.vue';
import Contact from '@/components/contact/Contact.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
    meta: {
      title: 'Ars Cameralis - Strona główna',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Ars Cameralis - O nas',
    },
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: 'Ars Cameralis - Aktualności',
    },
  },
  {
    path: '/conductor',
    name: 'Conductor',
    component: Conductor,
    meta: {
      title: 'Ars Cameralis - Dyrygent',
    },
  },
  {
    path: '/members',
    name: 'Members',
    component: Members,
    meta: {
      title: 'Ars Cameralis - Skład',
    },
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
        meta: {
          title: 'Ars Cameralis - Repertuar',
        },
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
          title: 'Ars Cameralis - Repertuar',
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
              title: 'Ars Cameralis - Repertuar',
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
              title: 'Ars Cameralis - Repertuar',
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
              title: 'Ars Cameralis - Repertuar',
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
              title: 'Ars Cameralis - Repertuar',
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
              title: 'Ars Cameralis - Repertuar',
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
              title: 'Ars Cameralis - Repertuar',
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
              title: 'Ars Cameralis - Repertuar',
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
              title: 'Ars Cameralis - Repertuar',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/collaboration',
    component: {
      render(component) {
        return component('router-view');
      },
    },
    children: [
      {
        path: '',
        name: 'Collaboration',
        component: Collaboration,
        meta: {
          title: 'Ars Cameralis - Współpraca',
        },
      },
      {
        path: 'auditions',
        name: 'Auditions',
        component: Auditions,
        meta: {
          breadcrumb: [
            {
              title: 'Współpraca',
              name: 'Collaboration',
            },
            {
              title: 'Przesłuchania do chóru',
            },
          ],
          title: 'Ars Cameralis - Współpraca',
        },
      },
      {
        path: 'concerts',
        name: 'Concerts',
        component: Concerts,
        meta: {
          breadcrumb: [
            {
              title: 'Współpraca',
              name: 'Collaboration',
            },
            {
              title: 'Koncerty',
            },
          ],
          title: 'Ars Cameralis - Współpraca',
        },
      },
      {
        path: 'weddings-and-liturgy',
        name: 'WeddingsAndLiturgy',
        component: WeddingsAndLiturgy,
        meta: {
          breadcrumb: [
            {
              title: 'Współpraca',
              name: 'Collaboration',
            },
            {
              title: 'Śluby / Oprawa liturgii',
            },
          ],
          title: 'Ars Cameralis - Współpraca',
        },
      },
    ],
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: 'Ars Cameralis - Galeria',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Ars Cameralis - Kontakt',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title || 'Ars Cameralis';
  next();
});

export default router;
