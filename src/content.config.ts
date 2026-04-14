import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      image: image(),
      description: z.string(),
      livesite: z.string(),
    }),
});

const opinions = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/opinions" }),
  schema: z.object({
    name: z.string(),
    company: z.string().optional(),
    opinion: z.string(),
  }),
});

export const collections = { projects, opinions };
