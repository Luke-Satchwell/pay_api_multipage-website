import React from 'react'
import { partnersLogo } from '../utils/constants'

const Contact = () => {
  const formStyling = `h-[42px] w-[327px] md:w-[445px] bg-transparent outline-none border-b-[1px] border-blue-sanJuan border-opacity-50 pl-5 pb-4`
  return (
    <section>
      <div className='w-[327px] md:w-[573px] lg:w-[730px] mx-auto'>
        <h2 className='font-dm text-blue-sanJuan text-[32px] md:text-[48px] lg:text-[56px] leading-[36px] md:leading-[56px] tracking-[-0.246154px] md:tracking-[-0.369231px] text-center lg:text-left my-10'>
          Submit a help request and we’ll get in touch shortly.
        </h2>
      </div>
      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <form
          action='#'
          method='post'
          className='flex flex-col items-start justify-start gap-6 w-[327px] md:w-[445px] mx-auto mb-16'
        >
          <label for='name' className='hidden'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            placeholder='Name'
            className={formStyling}
          />

          <label for='email' className='hidden'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            placeholder='Email Address'
            className={formStyling}
          />

          <label for='company' className='hidden'>
            Company Name:
          </label>
          <input
            type='text'
            id='company'
            name='company'
            placeholder='Company Name'
            className={formStyling}
          />

          <label for='title' className='hidden'>
            Title:
          </label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Title'
            className={formStyling}
          />

          <label for='message' className='hidden'>
            Message:
          </label>
          <textarea
            id='message'
            name='message'
            placeholder='Message'
            className='h-[89px] w-[327px] md:w-[445px] bg-transparent outline-none border-b-[1px] border-blue-sanJuan border-opacity-50 pl-5'
          ></textarea>
          <div className='flex flex-row-reverse items-center gap-5 h-[50px] w-[327px] md:w-[445px]'>
            <label for='stay-updated'>
              Stay up-to-date with company announcements and updates to our API:
            </label>
            <input
              type='checkbox'
              id='stay-updated'
              name='stay-updated'
              value='yes'
              className='bg-pink-dark focus:bg-pink-dark'
            />
          </div>

          <input
            type='submit'
            value='Submit'
            className='w-[168px] h-12 text-blue-sanJuan border-2 border-blue-sanJuan cursor-pointer rounded-3xl font-bold hover:text-white-link hover:bg-blue-mirage'
          />
        </form>

        <div className='w-[327px] md:w-[573px] lg:w-[541px] mx-auto text-center lg:text-left'>
          <h3 className='md:w-[445px] font-dm text-2xl text-blue-sanJuan tracking-[-0.184615px] opacity-75 mx-auto lg:mx-0 mb-10'>
            Join thousands of innovators already building with us
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-3 mx-auto items-center text-center gap-6 mt-7 mb-10'>
            {partnersLogo.map((partner) => (
              <div key={partner.name}>
                <img src={partner.logo} alt='' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
