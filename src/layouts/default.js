import React from 'react'

// components
import { Menu } from "../components/Menu/Menu"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const DefaultLayout = ({pageTitle, children}) => {
  return (
    <main style={pageStyles}>
      <title>hyperFormula / Luca Ucciero</title>
      <Menu></Menu>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default DefaultLayout;
