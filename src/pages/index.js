import * as React from "react"

// components
import { Menu } from "../components/Menu/Menu"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>hyperFormula / Luca Ucciero</title>
      <Menu></Menu>
      <h1 style={headingStyles}>
        hyperFormula( )
      </h1>
      <h2>
        Luca Ucciero
      </h2>
    </main>
  )
}

export default IndexPage
