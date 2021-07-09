import * as React from 'react';

// layout
import DefaultLayout from '../layouts/default';

// Plugins
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  return (
    <DefaultLayout>
      <h1>hyperFormula( )</h1>
      <h2>Luca Ucciero</h2>
      <StaticImage />
    </DefaultLayout>
  );
};

export default IndexPage;
