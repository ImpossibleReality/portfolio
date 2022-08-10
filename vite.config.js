import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools({
		defaultDirectives(p) {
			let params = p.searchParams;
			if (params.has('card')) {
				// add following directive to the component
				// format=webp;png&width=256;512
				params.set('format', 'webp;png');
				params.set('quality', '70');
				params.set('width', '256;512;1024');
			}
			return params
		}
	})],
	server: {
		host: true,
		port: 3000
	}
};

export default config;
