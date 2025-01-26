type ImageContent = {
  src: string;
  alt: string;
  caption?: string;
};

export type ContentItem = {
  type: 'text';
  subtitle: string;
  body: string;
  images?: ImageContent[];
} | {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
};

export type Story = {
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  content?: ContentItem[];
}; 