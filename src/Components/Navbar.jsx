import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className='flex justify-between bg-black text-white py-5 items-center'>
    <div>
        logo
    </div>
    <ul className='flex gap-4'>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">contact</Link></li>
    </ul>
    <div className='flex gap-3'>
        <button>login</button>
        <button>Signup</button>
    </div>
   </nav>
  )
}
