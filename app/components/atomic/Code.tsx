interface CodeProps {
  block?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Code = ({ block, children, className = '' }: CodeProps) => {
  if (block) {
    return (
      <div className={`mockup-code max-w-95/100 ${className}`}>
        <pre>
          <code>{children}</code>
        </pre>
      </div>
    );
  }

  return <code>{children}</code>;
};
