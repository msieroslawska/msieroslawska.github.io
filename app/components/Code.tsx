interface CodeProps {
  children: React.ReactNode;
  className?: string;
}

export const Code = ({ children, className = '' }: CodeProps) => {
  return (
    <div className={`mockup-code w-full ${className}`}>
      <pre data-prefix="$">
        <code>{children}</code>
      </pre>
    </div>
  );
};
