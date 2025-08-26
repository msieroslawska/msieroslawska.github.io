interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return <div className={`${className}`}>{children}</div>;
};

export const FixedHeightContainer = ({ children, className = '' }: ContainerProps) => {
  return <Container className={`bg-base-100 flex justify-center h-24 w-full ${className}`}>{children}</Container>;
};
