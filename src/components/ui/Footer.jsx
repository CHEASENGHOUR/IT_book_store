import React from 'react'
import CopyRight from './CopyRight'
import Tel from './Tel'
import Service from './Service'
import Information from './Information'
import Address from './Address'

function Footer() {
  return (
    <>
        <div className=' w-full bg-main/5 '>
            <div className='w-full px-25 py-7 flex justify-between items-start'>
                <Tel/>
                <Service/>
                <Information/>
            </div>
            <Address/>
        </div>
        <CopyRight/>
    </>
    
  )
}

export default Footer