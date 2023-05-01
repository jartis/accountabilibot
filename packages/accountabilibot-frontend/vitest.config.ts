/// <reference types="vitest" />
import { defineConfig } from 'vite';

import vitePluginSolid from 'vite-plugin-solid';
import vitePluginSuid from '@suid/vite-plugin';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        vitePluginSolid(),
        vitePluginSuid(),
        viteTsConfigPaths({
            root: '../../',
        }),
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
