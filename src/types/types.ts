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

export type Proyecto = {
  id: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  description: string;
  livesite: string;
  tags?: string[];
};
