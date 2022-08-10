import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	preprocess: [{
		style: ({ content }) => {
			return { code: content.replace(/(-?\d+)vh/g, "calc(max(var(--vh,1vh), 3px) * $1)") }
		}
	}, preprocess()],

	kit: {
		adapter: adapter(),
		alias: {
			'$img': 'src/images',
		}
	}
};

export default config;