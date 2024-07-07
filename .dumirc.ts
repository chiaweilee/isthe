import { defineConfig } from 'dumi';

const productionConfig = {
  base: '/iscorrect/',
  publicPath: '/iscorrect/',
};

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'iscorrect',
  },
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'zh-CN', name: '中文' },
  ],
  ...(process.env.NODE_ENV === 'production' ? productionConfig : {}),
});
