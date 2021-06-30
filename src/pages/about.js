import React from 'react'
import { useSpring, animated } from 'react-spring'

// layout
import DefaultLayout from "../layouts/default"

const AboutPage = () => {

  const spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <DefaultLayout>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <animated.div style={spring}>I will fade in</animated.div>
    </DefaultLayout>
  )
}

export default AboutPage;
