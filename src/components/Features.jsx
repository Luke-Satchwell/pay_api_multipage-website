import React from 'react'
import { features } from '../utils/home'

const Features = () => {
  return (
    <section className=' mt-16 mb-16'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-3'>
        {features.map((item) => (
          <div
            key={item.title}
            className='flex flex-col items-center gap-5 w-[328px] md:w-[223px] mx-auto text-center'
          >
            <div className='h-[106px] w-[106px] md:h-[88px] md:w-[88px]'>
              <img src={item.icon} alt={item.title} />
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='font-bold text-lg text-blue-sanJuan'>
                {item.title}
              </h3>
              <p className='text-blue-sanJuanLight'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
