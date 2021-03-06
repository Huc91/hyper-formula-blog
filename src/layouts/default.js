import React from 'react';

// components
import { Menu } from '../components/Menu/Menu';

// fonts
import "@fontsource/ibm-plex-mono/500.css" // Weight 500.

// style
import './default.css'

// Data
import { useStaticQuery, graphql } from 'gatsby'

const DefaultLayout = ({ pageTitle, children }) => {

  const data = useStaticQuery( graphql
    `
    query MyQuery {
      site {
        id
        siteMetadata {
          title
          description
        }
      }
    }
    `
  )

  return (
    <main>
      <title>{data.site.siteMetadata.title}</title>
      <span>{data.site.siteMetadata.title}</span>
      <Menu></Menu>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default DefaultLayout;
