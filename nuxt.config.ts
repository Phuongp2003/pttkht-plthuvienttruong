export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@vueuse/nuxt', '@nuxthq/studio', '@nuxt/content', '@nuxt/ui'],
	css: ['@/assets/css/tailwind.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	plugins: ['~/plugins/global-components.js'],
	content: {
		highlight: {
			preload: ['python'],
		},
	},
	nitro: { prerender: { failOnError: false } },
});
