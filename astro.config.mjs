import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  redirects: {
    '/hidden-treasures-in-cartagena-de-indias': '/blog/hidden-treasures-in-cartagena-de-indias'
  },
  experimental: {
    svg: true,
    responsiveImages: true,
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  output: 'server',
  site: "https://www.brsolution.com.co",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
 },
  
  integrations: [
    icon(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US', 
          es: 'es-ES',          
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});