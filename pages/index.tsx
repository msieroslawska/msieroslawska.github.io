import React from 'react';

import PageLayout from '../layouts/Page';
import Hello from '../components/Hello';

const IndexPage: React.FunctionComponent = () => (
  <PageLayout title="Marta Sierosławska | Frontend engineer">
    <Hello />
  </PageLayout>
);

export default IndexPage;
