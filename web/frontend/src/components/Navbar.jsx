import React from 'react'
import Logo from '../img/logo.png'

const Navbar = () => {
  return (
    <div>
        <div className='flex'>
        <img src={Logo} className='w-10 mb-3' alt='logo'/>
        <p className='text-[2rem] '>ames</p>
        </div>

    </div>
  )
}

export default Navbar