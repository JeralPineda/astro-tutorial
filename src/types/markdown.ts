export interface MarkdownPost {
  url: string;
  frontmatter: {
    layout?: string;
    title: string;
    pubDate: Date | string;
    description: string;
    author: string;
    image?: {
      url: string;
      alt: string;
    };
    tags?: string[];
  };
}
