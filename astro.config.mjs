// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

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
	},

	output: "server",
	integrations: [sitemap(), robotsTxt()],
});
