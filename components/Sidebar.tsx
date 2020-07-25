import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

const Sidebar: React.FC = () => (
  <section className="sidebar">
    <Nav />
    <Footer />
  </section>
);

export default Sidebar;
