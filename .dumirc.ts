import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'iscorrect',
  },
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'zh-CN', name: '中文' },
  ],
  base: '/iscorrect',
  publicPath: '/iscorrect/',
  runtimePublicPath: {},
});
