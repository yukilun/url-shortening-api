// https://nuxt.com/docs/api/configuration/nuxt-config

import defaultTheme from 'tailwindcss/defaultTheme';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: "Frontend Mentor | Shortly URL shortening API Challenge",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: "icon", type:"image/png", sizes: "32x32", href: "/favicon-32x32.png"},
      ]
    }
  },
  tailwindcss: {
    exposeConfig: true,
    config: {
      content: [],
      future: {
        hoverOnlyWhenSupported: true,
      },
      theme: {
        extend: {
          colors: {
            'cyan': 'hsl(180, 66%, 49%)',
            'dark-violet': 'hsl(257, 27%, 26%)',
            'light-violet': '#EFF1F7',
            'red': 'hsl(0, 87%, 67%)',
            'gray': 'hsl(0, 0%, 75%)',
            'grayish-violet': 'hsl(257, 7%, 63%)',
            'very-dark-blue': 'hsl(255, 11%, 22%)',
            'very-dark-violet': 'hsl(260, 8%, 14%)'
          },
          fontFamily: {
            'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
          }
        },
      },
      plugins: [],
    }
  },
  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  }
})
