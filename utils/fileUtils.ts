import fs from 'fs';
import matter from 'gray-matter';

import { Article, Blog, Codelog } from '../interfaces';

export const getDirectories = (source: string): string[] =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export const getCodelogs = (): Codelog[] => {
  const ROOT_PATH = `${process.cwd()}/content/codelogs`;
  const yearDirs = getDirectories(ROOT_PATH);
  let codelogs: Codelog[] = [];

  yearDirs.forEach((yearDir) => {
    const monthDirs = getDirectories(`${ROOT_PATH}/${yearDir}`);

    monthDirs.forEach((monthDir) => {
      const files = fs.readdirSync(`${ROOT_PATH}/${yearDir}/${monthDir}`, 'utf-8');

      const codelogsInMonth = files
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
          const path = `${ROOT_PATH}/${yearDir}/${monthDir}/${fileName}`;
          const rawContent = fs.readFileSync(path, {
            encoding: 'utf-8',
          });
          const {
            data: { tags, title },
            content,
          } = matter(rawContent);
          const day = fileName.replace('.md', '');

          return {
            content,
            tags,
            title,
            slug: { year: yearDir, month: monthDir, day },
          };
        });

      codelogs = [...codelogs, ...codelogsInMonth];
    });
  });

  return codelogs;
};

export const getArticles = (): Article[] => {
  const ROOT_PATH = `${process.cwd()}/content/articles`;
  const files = fs.readdirSync(ROOT_PATH, 'utf-8');

  return files
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const rawContent = fs.readFileSync(`${ROOT_PATH}/${fileName}`, { encoding: 'utf-8' });
      const {
        data: { title },
        content,
      } = matter(rawContent);

      return {
        content,
        title,
        slug: fileName.replace('.md', ''),
      };
    });
};

export const getBlogs = (): Blog[] => {
  const ROOT_PATH = `${process.cwd()}/content/blog`;
  const files = fs.readdirSync(ROOT_PATH, 'utf-8');

  return files
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const rawContent = fs.readFileSync(`${ROOT_PATH}/${fileName}`, { encoding: 'utf-8' });
      const {
        data: { date, tags, title },
        content,
      } = matter(rawContent);

      return {
        content,
        date,
        tags,
        title,
        slug: fileName.replace('.md', ''),
      };
    });
};
