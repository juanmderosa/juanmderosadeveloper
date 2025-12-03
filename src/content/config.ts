import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      image: image(),
      description: z.string(),
      livesite: z.string().url(),
    }),
});

const opinions = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    company: z.string().optional(),
    opinion: z.string(),
  }),
});

export const collections = { projects, opinions };
