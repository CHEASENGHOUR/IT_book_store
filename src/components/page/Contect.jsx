import { useState, useEffect } from 'react'
import { usePages } from '../context/PageContext';
import Breadcrumbs from '../ui/Breadcrumbs';

function Contect() {
  const pages = usePages();
  return (
    <div>
      <h1 className=' px-26 py-3'>
        <Breadcrumbs />
      </h1>

      <div className="">
        <iframe
          title="ETEC Center II"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d104.8906499!3d11.5620074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951601e309fbd%3A0x2bbb7a5f2162e106!2sETEC%20Center%20II!5e0!3m2!1sen!2skh!4v1692870000000!5m2!1sen!2skh"
        />

      </div>
    </div>
  )
}

export default Contect