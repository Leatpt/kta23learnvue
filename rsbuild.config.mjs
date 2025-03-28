import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { GenerateSW } from 'workbox-webpack-plugin';

export default defineConfig({
  plugins: [
    pluginVue(),
  ],
  tools: {
    rspack: {
      plugins: [
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          maximumFileSizeToCacheInBytes: 10*1024*1024,
          navigateFallback: '/index.html',
        })
      ]
    }
  },
  html: {
    tags: [
      {
        tag: 'link',
        attrs: { rel: 'manifest', href:'/manifest.json' },
        head: true,
        append: true,
      },
    ],
  },
});
