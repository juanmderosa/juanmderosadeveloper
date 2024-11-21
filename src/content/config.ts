import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    image: z.string(),
    livesite: z.string(),
    description: z.string(),
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
