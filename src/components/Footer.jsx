import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'
import { socialLinks, navLinks } from '../utils/constants'

const Footer = () => {
  return (
    <footer>
      <div className=' mt-20 bg-blue-mirage py-10 md:p-8 text-white-link flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 text-center'>
        <div>
          <Link to='/'>
            <img
              src={logo}
              alt='pay_api logo'
              className='filter brightness-0 invert cursor-pointer'
            />
          </Link>
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-10 '>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className='opacity-70 hover:opacity-100 cursor-pointer'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='flex items-center justify-center gap-2 md:gap-7'>
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className='opacity-70 hover:opacity-100 cursor-pointer'
            >
              <img src={item.logo} alt={item.name} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
