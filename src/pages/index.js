import * as React from 'react';

// layout
import DefaultLayout from '../layouts/default';

// Components
import { Card } from '../components/Card';

// Plugins
import { StaticImage } from 'gatsby-plugin-image';

// Data
import { useStaticQuery, graphql } from 'gatsby'

// markup
const IndexPage = () => {

    // const projects = useStaticQuery( graphql
    // `
    // query MyProjects {
    //   site {
    //     id
    //     siteMetadata {
    //       title
    //       description
    //     }
    //   }
    // }
    // `
    // )
  
  const { allMarkdownRemark : { nodes } } = useStaticQuery( graphql
    `
      query MyProjects {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/project/"}}) {
        nodes {
          frontmatter {
            title
            slug
            path
          }
        }
      }
    }
    `
    )

  console.log(nodes);
  return (
    <DefaultLayout>
      <h1>hyperFormula()</h1>
      <h2>Luca Ucciero</h2>
      {nodes.map(({ frontmatter }, i) => {
        return <Card key={i} title={frontmatter.title} url="/about" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></Card>
      })}
    </DefaultLayout>
  );
};

export default IndexPage;
