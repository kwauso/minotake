export interface Story {
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  content?: ContentItem[] | string;
}

export interface ContentItem {
  type: "text" | "image";
  subtitle?: string;
  body?: string;
  src?: string;
  alt?: string;
  caption?: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}
