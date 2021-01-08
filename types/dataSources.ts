export interface CourseList {
  author: string;
  title: string;
  url: string;
  summary?: string;
  finished?: string;
}

export interface Topic {
  title: string;
  url?: string;
}

export interface Resource {
  title: string;
  url: string;
}

export interface CodelogResource extends Resource {
  codelogSource: {
    year: string;
    month: string;
    day: string;
  };
}
