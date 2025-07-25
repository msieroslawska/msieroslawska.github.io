import React from 'react';

type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type FontWeight = 400 | 500 | 600 | 700 | 800 | 900;
type ElementType = 'p' | 'span' | 'div';

interface TextProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  fontWeight?: FontWeight;
  size?: TextSize;
  style?: React.CSSProperties;
}

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  s: 'text-sm',
  m: 'text-base',
  l: 'text-lg',
  xl: 'text-xl',
};

const fontWeightClasses: Record<FontWeight, string> = {
  400: 'font-normal',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold',
  800: 'font-extrabold',
  900: 'font-black',
};

export const Text = ({ as = 'p', children, className = '', fontWeight = 500, size = 'm', style = {} }: TextProps) => {
  const Component = as;
  return (
    <Component className={`${fontWeightClasses[fontWeight]} ${sizeClasses[size]} ${className}`} style={style}>
      {children}
    </Component>
  );
};
