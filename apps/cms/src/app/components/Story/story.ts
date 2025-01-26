type ContentItem = {
  type: 'text';
  subtitle: string;
  body: string;
} | {
  type: 'image';
  src: string;
  alt: string;
};

export type Story = {
  category: string;
  title: string;
  image: string;
  alt: string;
  content: ContentItem[];
}; 