import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    markdown: {
        drafts: true
    },
    integrations: [tailwind({
        config: { applyBaseStyles: true }
    }), mdx({
        drafts: true
    }), react()]
});
