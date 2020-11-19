export interface Article {
  content: string;
  slug: string;
  title: string;
}

export interface Blog {
  content: string;
  date: string;
  slug: string;
  tags: string[];
  title: string;
}
