import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  title: 'delta-css',
  description: 'CSS framework based on themes concept',

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
    repo: 'https://github.com/omega5300/delta-css',
    navbar: [
      {
        text: 'Get Started',
        link: '/guide/',
      },
      {
        text: 'main theme',
        link: '/delta-main',
      },
      {
        text: 'light-dark theme',
        link: '/delta-light-dark',
      },
    ],
  }),
});
