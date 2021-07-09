import React from 'react';

// components
import { Menu } from '../components/Menu/Menu';

// fonts
import "@fontsource/ibm-plex-mono/500.css" // Weight 500.

// style
import './default.css'

const DefaultLayout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>hyperFormula / Luca Ucciero</title>
      <Menu></Menu>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default DefaultLayout;
