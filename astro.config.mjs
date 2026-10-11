import { defineConfig } from 'astro/config';

// Replace with the production domain once it is known.
export default defineConfig({
  site: 'https://ovnistudio.com',
  trailingSlash: 'ignore',
  build: { format: 'directory', assets: 'assets' },
});
