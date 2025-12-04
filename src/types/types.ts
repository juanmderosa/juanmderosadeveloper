import type { RenderedContent } from "astro:content";

export interface OpinionData {
  id: string;
  body?: string | undefined;
  collection: "opinions";
  data: {
    name: string;
    opinion: string;
    company?: string | undefined;
  };
  rendered?: RenderedContent | undefined;
  filePath?: string | undefined;
}

interface ProyectoImage {
  src: string;
  width: number;
  height: number;
  format: string;
}

interface ProyectoData {
  id: string;
  title: string;
  image: ProyectoImage;
  description: string;
  livesite: string;
}

export interface Proyecto {
  id: string;
  slug: string;
  data: ProyectoData;
}
