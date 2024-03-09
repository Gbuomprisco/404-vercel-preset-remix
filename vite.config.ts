import {vitePlugin} from '@remix-run/dev';
import {installGlobals} from '@remix-run/node';
import {defineConfig} from 'vite';
import {vercelPreset} from "@vercel/remix/vite";

installGlobals();

export default defineConfig({
    plugins: [vitePlugin({
        presets: [
            vercelPreset()
        ]
    })],
    server: {
        port: 3000,
    },
});
