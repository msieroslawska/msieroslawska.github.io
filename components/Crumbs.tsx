import React from 'react';

interface Props {
  visible: boolean;
}

const Crumbs: React.FC<Props> = ({ visible }: Props) => {
  const className = visible ? 'crumbs visible' : 'crumbs';
  return <section className={className}>PPPP</section>;
};

export default Crumbs;
