import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const magazines = defineCollection({
  loader: file("src/content/magazines.yaml"),
  schema: ({ image }) =>
    z.object({
      logo: image(),
      pdf: z.string().optional(),
      pages: z.array(image()).min(12),
    }),
});

export const collections = {
  magazines,
};
