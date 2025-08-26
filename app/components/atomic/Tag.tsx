import Link from 'next/link';

export const Tag = ({ tag }: { tag: string }) => {
  return (
    <div key={tag} className="badge badge-soft badge-secondary not-prose hover:underline">
      <Link href={`/tags/${tag}`}>{`#${tag}`}</Link>
    </div>
  );
};
