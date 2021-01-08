export interface Article {
  content: string;
  slug: string;
  title: string;
  tags: string[];
}

export interface Blog {
  content: string;
  date: string;
  slug: string;
  tags: string[];
  title: string;
}

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

export interface TagSource {
  name: string;
  url: JSX.Element;
}

export interface Tags {
  [key: string]: TagSource[];
}
