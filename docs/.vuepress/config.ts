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
