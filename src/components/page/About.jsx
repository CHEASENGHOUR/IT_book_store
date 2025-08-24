import React from 'react'
import { usePages } from '../context/PageContext';

function About() {
  const pages = usePages();
  return (
    <div>About</div>
  )
}

export default About