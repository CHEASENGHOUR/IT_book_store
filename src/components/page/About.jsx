import React from 'react'
import { usePages } from '../context/PageContext';
import Breadcrumbs from '../ui/Breadcrumbs';

function About() {
  const pages = usePages();
  const currentPage = pages.find((page) => page.name === "about");
  return (
    <div>
      
      <h1 className=' bg-amber-200 px-26 py-5'>
        <Breadcrumbs/>
      </h1>
    </div>
  )
}

export default About