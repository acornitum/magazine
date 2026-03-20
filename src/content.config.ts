import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

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
