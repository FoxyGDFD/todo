import {
  tailwindSimplifyPlugin,
  tailwindSimplifyPreset
} from 'simplify-dev/utils';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*', './node_modules/simplify-dev/**'],
  plugins: [tailwindSimplifyPlugin],
  presets: [tailwindSimplifyPreset],
  theme: {
    extend: {}
  }
} satisfies Config;
