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

export interface MappedCodelogs {
  [key: string]: Codelog[];
}

export interface Url {
  href: string;
  name: string;
}
