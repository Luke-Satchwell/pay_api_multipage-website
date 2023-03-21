import React from 'react'

const ReadyToStart = () => {
  return (
    <div className='w-[328px] md:w-[445px] lg:w-[90%] mx-auto flex flex-col lg:flex-row lg:gap-24 items-center justify-center'>
      <h2 className='font-dm text-blue-sanJuan text-[32px] md:text-[48px] leading-[36px] md:leading-[56px] tracking-[-0.246154px] md:tracking-[-0.369231px]'>
        Ready To Start?
      </h2>
      <form
        action='#'
        className='flex flex-col md:flex-row gap-5 md:justify-center lg:justify-start pt-7'
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
    </div>
  )
}

export default ReadyToStart
