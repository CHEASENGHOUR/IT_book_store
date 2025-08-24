import React from 'react'
import { usePages } from '../context/PageContext'

function Shop() {
  const pages = usePages();
  const currentPage = pages.find((page) => page.name === "shop");
  return (
    <div>
      Home == {currentPage ? currentPage.name : "Not Found"}


    </div>
  )
}

export default Shop