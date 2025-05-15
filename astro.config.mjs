// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://eminence-astro-theme-cloudflare-workers.xeffen25.workers.dev/",
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
});
