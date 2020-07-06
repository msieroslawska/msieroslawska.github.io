import fs from 'fs';
import matter from 'gray-matter';
import { v4 } from 'uuid';

interface Codelog {
  content: string;
  id: string;
  slug: string[];
  tags: string[];
  title: string;
}

export const ROOT_PATH = `${process.cwd()}/content/codelogs`;

export const getDirectories = (source: string): string[] => fs
  .readdirSync(source, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

export const getCodelogs = (): Codelog[] => {
  let codelogs: Codelog[] = [];
  const yearDirs = getDirectories(ROOT_PATH);

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
          const { data: { tags }, content } = matter(rawContent);
          const day = fileName.replace('.md', '');

          return {
            content,
            tags,
            id: v4(),
            slug: [yearDir, monthDir, day],
            title: `${yearDir}-${monthDir}-${day}`,
          };
        });

      codelogs = [
        ...codelogs,
        ...codelogsInMonth,
      ];
    });
  });

  return codelogs;
};
