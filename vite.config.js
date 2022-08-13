import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import compiler from 'rollup-plugin-closure-compiler';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives(p) {
				let params = p.searchParams;
				if (params.has('card')) {
					// add following directive to the component
					// format=webp;png&width=256;512
					params.set('format', 'webp;png');
					params.set('quality', '80');
					params.set('aspect', '1.33');
					params.set('width', '256;512;1024');
				}
				return params;
			}
		}),
		compiler(),
	],
	server: {
		host: true,
		port: 3000
	}
};

export default config;
