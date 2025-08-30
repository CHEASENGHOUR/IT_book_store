import React from 'react'
import { FaFacebook, FaPinterest } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function Address() {
  return (
    <div className='w-full px-25'>
        <div className=' w-2/5'>
            <h1 className=' font-bold text-main'>អាសយដ្ឋាន</h1>
            <p>ផ្លូវលេខ ១៦០, ភ្នំពេញ</p>
            <div className=' text-3xl text-main/50 flex gap-2'>
                <FaFacebook className=' hover:text-blue-700'/>
                <FaSquareXTwitter className=' hover:text-black'/>
                <FaPinterest/>
            </div>
        </div>
    </div>
  )
}

export default Address