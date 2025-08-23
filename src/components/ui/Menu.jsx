import React from 'react'
import { Link } from 'react-router-dom'
function Menu() {
  return (
    <>
        <Link to={"/"}>
            <p className=' font-dangrek p-1'>
                ទំព័រដើម
            </p>
        </Link>

        <Link to={"/shop"}>
            <p className=' font-dangrek p-1'>
                សៀវភៅទាំងអស់
            </p>
        </Link>
        <Link to={"/about"}>
            <p className=' font-dangrek p-1'>
                អំពីយើង
            </p>
        </Link>
        <Link to={"/contect"}>
            <p className=' font-dangrek p-1'>
                ទំនាក់ទំនង
            </p>
        </Link>
    </>
  )
}

export default Menu