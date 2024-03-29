import {vitePlugin} from '@remix-run/dev';
import {installGlobals} from '@remix-run/node';
import {defineConfig} from 'vite';
import {vercelPreset} from "@vercel/remix/vite";
import tsconfigPaths from 'vite-tsconfig-paths';


installGlobals();

export default defineConfig({
    plugins: [vitePlugin({
        presets: [
            vercelPreset()
        ]
    }), tsconfigPaths()],
    server: {
        port: 3000,
    },
});
