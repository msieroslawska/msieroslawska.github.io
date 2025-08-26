import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const ListItem = ({ children, className = '' }: ListItemProps) => {
  return <li className={className}>{children}</li>;
};

const List = ({ children, className = '' }: ListProps) => {
  return <ul className={`list ${className}`}>{children}</ul>;
};

List.Item = ListItem;

export { List };
