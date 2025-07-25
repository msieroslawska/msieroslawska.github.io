interface AnchorProps {
  className?: string;
  href: string;
  label: string;
}

export const Anchor = ({ className = '', href, label }: AnchorProps) => {
  return (
    <a className={`link ${className}`} href={href}>
      {label}
    </a>
  );
};
