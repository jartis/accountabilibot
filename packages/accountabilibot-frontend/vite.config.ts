import { defineConfig } from 'vite';

import vitePluginSolid from 'vite-plugin-solid';
import vitePluginSuid from '@suid/vite-plugin';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    cacheDir: '../../node_modules/.vite/accountabilibot-frontend',

    server: {
        port: 4200,
        host: 'localhost',
    },

    preview: {
        port: 4300,
        host: 'localhost',
    },

    plugins: [
        vitePluginSolid(),
        vitePluginSuid(),
        viteTsConfigPaths({
            root: '../../',
        }),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [
    //    viteTsConfigPaths({
    //      root: '../../',
    //    }),
    //  ],
    // },
});
