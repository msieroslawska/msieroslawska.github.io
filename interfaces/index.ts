export interface Codelog {
  content: string;
  slug: {
    year: string;
    month: string;
    day: string;
  };
  tags: string[];
  title: string;
}
