import React from 'react'
import { Link } from 'react-router-dom'
import { usePages } from '../context/PageContext';
function Menu() {
    const pagesRoute = usePages();
    return (
        <>
            {
                pagesRoute.map((page) => (
                    <Link 
                        key={page.id}
                        to={`/${page.name}`}
                        >
                        <p className=' font-dangrek p-1'>
                            { page.text }
                        </p>
                    </Link>
                ))
            }
        </>
    )
}

export default Menu