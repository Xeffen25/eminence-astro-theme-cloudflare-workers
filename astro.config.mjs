// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "https://eminence-astro-workers.xeffen25.com/",

	i18n: {
		defaultLocale: "es",
		locales: ["es"],
	},

	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			...(import.meta.env.PROD ? { alias: { "react-dom/server": "react-dom/server.edge" } } : {}),
		},
	},

	output: "server",
	integrations: [sitemap(), robotsTxt(), react(), mdx()],
});
