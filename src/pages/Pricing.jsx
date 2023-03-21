import React from 'react'

import { pricing_plans } from '../utils/pricing'

const Pricing = () => {
  const baseList = [
    'Transactions',
    'Auth',
    'Identity',
    'Investments',
    'Assets',
    'Liabilities',
    'Income',
  ]

  return (
    <section className='max-w-[95%] mx-auto'>
      <div>
        <h2 className='mx-auto font-dm text-blue-sanJuan text-[32px] md:text-[48px] lg:text-[56px] leading-[36px] md:leading-[56px] tracking-[-0.246154px] md:tracking-[-0.369231px] lg:tracking-[-0.430769px] text-center lg:text-left mb-8'>
          Pricing
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 text-center lg:text-left mb-16 items-center lg:items-start'>
        {pricing_plans.map((plan) => (
          <div
            key={plan.name}
            className='py-7 text-center lg:text-left xl:w-[350px]'
          >
            <h3 className='font-dm text-pink-dark text-2xl md:leading-10 lg:text-[32px]'>
              {plan.title}
            </h3>
            <p className='text-blue-sanJuanLight'>{plan.desc}</p>
            <p className='text-blue-sanJuan font-dm text-[56px] leading-[72px] tracking-[-0.430769px]'>
              ${plan.price.toFixed(2)}
            </p>
            {/* creating the feature list of each pricing plan by mapping over base list and comparing plan items to baselist */}
            <div
              className='flex flex-col items-center gap-6 justify-center lg:items-start mt-4 border-b-[1px] border-blue-sanJuanLight border-opacity-50 pb-8 mb-5
            '
            >
              {baseList.map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-5 w-1/3 text-blue-sanJuan'
                >
                  {plan.items.includes(item) ? (
                    <p className='flex gap-5'>
                      <span className='text-pink-dark'>&#10003; </span>
                      {item}
                    </p>
                  ) : (
                    <p className='flex gap-5 opacity-50'>
                      <span>x</span>
                      {item}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button className='w-[168px] h-12 text-blue-mirage border-2 border-blue-mirage cursor-pointer rounded-3xl font-bold hover:text-white-link hover:bg-blue-mirage'>
              Request Access
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
