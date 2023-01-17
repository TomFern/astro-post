import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
});
