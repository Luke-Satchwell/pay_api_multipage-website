import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'
import { navLinks } from '../utils/constants'
import { MdOutlineMenu, MdClose } from 'react-icons/md'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  // Function to handle screen size change
  function handleResize() {
    if (toggleMenu && window.matchMedia('(min-width: 768px)').matches) {
      setToggleMenu(false)
    }
  }

  // Add event listener to handle screen size changes
  window.addEventListener('resize', handleResize)

  return (
    <nav>
      <div className='relative mx-auto flex items-center justify-between pt-10 pb-8 px-6'>
        <div>
          <Link to='/'>
            <img
              src={logo}
              alt='pay_api brand logo'
              className='h-[38px] w-[135px] mr-6 lg:mr-12 cursor-pointer'
            />
          </Link>
        </div>
        <div className='hidden md:flex gap-5 lg:gap-7 '>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className='font-bold  text-blue-sanJuan opacity-70 hover:opacity-100 cursor-pointer'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='hidden md:flex lg:ml-auto'>
          <button className='w-[173px] h-[48px] bg-pink-dark rounded-3xl font-inherit border-none text-white-link font-bold cursor-pointer tracking-[-0.115385px] hover:bg-pink-charm'>
            Schedule a Demo
          </button>
        </div>
        <div className='flex md:hidden absolute top-[40px] right-[30px] z-40 '>
          {toggleMenu ? (
            <MdClose
              size={27}
              fill={'#FBFCFE'}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <MdOutlineMenu
              size={27}
              fill={'#36536B'}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='fixed top-0 right-0 -z-10 bg-blue-mirage w-[300px] h-[667px] flex flex-col items-center justify-start gap-20 pt-24 overflow-hidden '>
              <div className='h-[1px] w-3/4 mx-auto bg-white-link opacity-25' />
              <div className='flex flex-col items-center gap-10'>
                <div className='flex flex-col items-center gap-10 '>
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className='font-bold text-xl text-white-link opacity-70 hover:opacity-100 cursor-pointer'
                      onClick={() => setToggleMenu(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className='flex'>
                  <button className='w-[173px] h-[48px] bg-pink-dark rounded-3xl font-inherit border-none text-white-link font-bold cursor-pointer tracking-[-0.115385px] hover:bg-pink-charm'>
                    Schedule a Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
