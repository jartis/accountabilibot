/// <reference types="vitest" />
import { defineConfig } from 'vite';

import vitePluginSolid from 'vite-plugin-solid';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        viteTsConfigPaths({
            root: '../../',
        }),
        vitePluginSolid(),
    ],
    test: {
        deps: {
            registerNodeLoader: true,
            inline: [/solid-js/],
        },
        globals: true,
        cache: {
            dir: '../../node_modules/.vitest',
        },
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        setupFiles: ['./setupVitest.ts'],
    },
    resolve: {
        conditions: ['development', 'browser'],
    },
});
