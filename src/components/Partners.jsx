import React from 'react'
import { partnersLogo } from '../utils/constants'
import { partnersText } from '../utils/home'

const partners = () => {
  return (
    <section>
      <div className=' bg-blue-mirage  text-white-link mt-16 pt-16 pb-16 lg:px-[150px] lg:mx-[-150px] xl:mx-0 text-center lg:text-left'>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-center gap-12'>
          <div className='w-[280px] md:w-[536px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center text-center gap-11 '>
            {partnersLogo.map((item) => (
              <div key={item.name} className=''>
                <div>
                  <img
                    src={item.logo}
                    alt=''
                    className='filter brightness-0 invert'
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='w-[327px] md:w-[457px] lg:w-[445px] flex flex-col gap-5 items-center lg:items-start justify-center'>
            {partnersText.map((item) => (
              <div key={item.name} className='flex flex-col gap-7'>
                <h2 className='font-dm text-[32px] md:text-[48px] leading-[36px] md:leading-[56px] lg:tracking-[-0.369231px]'>
                  {item.title}
                </h2>
                <p>{item.desc}</p>
              </div>
            ))}
            <button href='/about'>About us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default partners
