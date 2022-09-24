import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/home', component: '@/pages/home' },
    { path: '/page1', component: '@/pages/component/page1' },
    { path: '/page2', component: '@/pages/component/page2' },
    // { path: '/page3', component: '@/pages/page3' },
    // { path: '/page4', component: '@/pages/page4' },
    // { path: '/page5', component: '@/pages/page5' },
  ],
  fastRefresh: {},
});
