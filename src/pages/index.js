import * as React from 'react';

// layout
import DefaultLayout from '../layouts/default';

// Components
import { Card } from '../components/Card';

// Plugins
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  return (
    <DefaultLayout>
      <h1>hyperFormula()</h1>
      <h2>Luca Ucciero</h2>
      <Card title="monster hand" url="/about" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></Card>
    </DefaultLayout>
  );
};

export default IndexPage;
