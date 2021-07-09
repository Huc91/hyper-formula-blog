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
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </DefaultLayout>
  );
};

export default IndexPage;
