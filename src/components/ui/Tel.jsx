import React from 'react'
import Logo from './Logo'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
function Tel() {
  return (
    <div>
        <Logo/>
        <div className=' mt-3 flex gap-5'>
            <TfiHeadphoneAlt size={50} className=' text-main'/>
            <div>
                <p>ព័ត៌មានបន្ថែម សូមទំនាក់ទំនងយើង៖</p>
                <p className=' text-2xl font-semibold'>Tel: 068 625 866</p>
            </div>
        </div>
    </div>
  )
}

export default Tel;