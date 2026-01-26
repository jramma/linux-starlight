import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { pageThemeObsidianSchema } from "starlight-theme-obsidian/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(), schema: docsSchema({
      extend: pageThemeObsidianSchema
    })
  }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
