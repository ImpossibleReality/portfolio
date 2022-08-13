import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex';

const mdsvexConfig = {
	extensions: ['.smd'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		{
			style: ({ content }) => {
				return { code: content.replace(/(-?\d+)vh/g, 'calc(max(var(--vh,1vh), 3px) * $1)') };
			}
		},
		mdsvex(mdsvexConfig),
		preprocess()
	],

	kit: {
		adapter: adapter(),
		alias: {
			$img: 'src/images'
		},

		prerender: {
			default: true
		}
	}
};

export default config;
