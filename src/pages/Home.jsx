import React from 'react'

import { heroHome } from '../utils/home'
import { Partners, Features } from '../components'

import implement from '../assets/home/illustration-easy-to-implement.svg'
import ui from '../assets/home/illustration-simple-ui.svg'

const Home = () => {
  return (
    <section>
      {heroHome.map((item) => (
        <div
          key={item.id}
          className='container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-34 xl:gap-40'
        >
          <div className='w-[180px] lg:w-[300px] h-[290px] lg:h-[500px] mr-0 pr-0'>
            <img src={item.image} alt='' className='w-full h-full' />
          </div>
          <div className='w-[327px] md:w-[573px] text-center lg:text-left flex flex-col gap-8'>
            <h1
              className='font-normal font-dm text-blue-sanJuan text-[32px] md:text-[48px] lg:text-7xl
             leading-[36px] md:leading-[56px] tracking-[-0.246154px] md:tracking-[-0.369231px] lg:tracking-[-0.553846px]'
            >
              {item.title}
            </h1>

            <form
              action='#'
              className='flex flex-col md:flex-row gap-5 md:justify-center lg:justify-start'
            >
              <input
                type='email'
                placeholder='Enter email address'
                required
                className=' h-12 rounded-3xl pl-6 outline-none md:w-[270px] md:mr-[-50px]'
              />
              <input
                type='submit'
                value='Schedule a Demo'
                className='w-[327px] md:w-[173px] h-[48px] bg-pink-dark rounded-3xl font-inherit border-none text-white-link font-bold cursor-pointer tracking-[-0.115385px] hover:bg-pink-charm'
              />
            </form>
            <p className=' text-blue-sanJuanLight'>
              Have any Questions?{' '}
              <a
                href='/contact'
                className='font-bold cursor-pointer hover:underline'
              >
                Contact Us
              </a>
            </p>
          </div>
        </div>
      ))}
      <Partners />
      <section className='flex flex-col gap-10'>
        <div className='flex flex-col lg:flex-row items-center justify-center text-center lg:text-left mt-10 w-11/12 mx-auto'>
          <div className=' -mb-8 flex justify-center'>
            <img src={implement} alt='implement' />
          </div>
          <div className='flex flex-col gap-5 md:w-[573px] lg:w-[445px] text-blue-sanJuanLight'>
            <h2 className='font-dm text-blue-sanJuan text-[36px] md:text-[48px] leading-[36px] md:leading-[56px] tracking-[-0.276923px] md:tracking-[-0.369231px]'>
              Easy to implement
            </h2>
            <p>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-12 text-center lg:text-left mt-7 w-11/12 mx-auto'>
          <div>
            <img src={ui} alt='simple ui' />
          </div>
          <div className='flex flex-col gap-5 md:w-[573px] lg:w-[445px] text-blue-sanJuanLight'>
            <h2 className='font-dm text-blue-sanJuan text-[36px] md:text-[48px] leading-[36px] md:leading-[56px] tracking-[-0.276923px] md:tracking-[-0.369231px]'>
              Simple UI & UX
            </h2>
            <p>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.{' '}
            </p>
          </div>
        </div>
      </section>
      <Features />
    </section>
  )
}

export default Home
