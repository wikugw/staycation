import React from 'react'
import Fade from 'react-reveal'

export default function MainContent({ data, content }) {
  return (
    <Fade>
      {data[current] && data[current].content}
    </Fade>
  )
}
