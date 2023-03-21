import React from 'react'

import { about1, about2, stats } from '../utils/about'

const About = () => {
  return (
    <section>
      <div className='w-[327px] md:w-[573px] lg:w-[730px] mx-auto'>
        <h2 className='font-dm text-blue-sanJuan text-[32px] md:text-[48px] lg:text-[56px] leading-[36px] md:leading-[56px] tracking-[-0.246154px] md:tracking-[-0.369231px] text-center lg:text-left my-10'>
          We empower innovators by delivering access to the financial system
        </h2>
      </div>
      <div className='flex flex-col gap-10 my-14'>
        {about1.map((item) => (
          <div
            key={item.name}
            className='flex flex-col md:flex-row gap-6 md:justify-evenly text-center md:text-left mx-auto px-5 '
          >
            <div className='font-dm text-blue-sanJuan text-2xl md:text-[32px] md:leading-[40px] tracking-[-0.184615px] md:tracking-[-0.246154px] md:-w-[223px] lg:w-[255px]'>
              {item.title}
            </div>
            <div className='md:w-[456px] lg:w-[635px] text-blue-sanJuanLight'>
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <div className='bg-mobile bg-no-repeat bg-cover md:bg-tablet lg:bg-desktop h-[300px]' />

      <div className='flex flex-col md:flex-row items-center justify-center gap-10 text-center my-12 '>
        {stats.map((stat) => (
          <div key={stat.name}>
            <div>
              <p className='opacity-70 text-blue-sanJuan text-[16px] leading-7'>
                {stat.title}
              </p>
              <p className='font-dm text-pink-dark text-[56px] leading-[72px] tracking-[-0.430769px]'>
                {stat.figure}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-10 my-14'>
        {about2.map((item) => (
          <div
            key={item.name}
            className='flex flex-col md:flex-row gap-6 md:justify-evenly text-center md:text-left mx-auto px-5 '
          >
            <div className='font-dm text-blue-sanJuan text-2xl md:text-[32px] md:leading-[40px] tracking-[-0.184615px] md:tracking-[-0.246154px] md:-w-[223px] lg:w-[255px]'>
              {item.title}
            </div>
            <div className='md:w-[456px] lg:w-[635px] text-blue-sanJuanLight'>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
