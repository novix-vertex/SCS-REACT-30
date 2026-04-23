import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[url("/hero.png")] h-170 mt-5 mb-5 bg-bottom rounded-2xl gap-5'>
      <img className="h-10" src="/logo.webp" alt="" />
      <h1 className='text-6xl font-[400]'>Where Money Grows</h1>
      <h4 className='w-120 text-center text-xl font-[500] text-gray-600'>A programmable, utility-driven stable token designed for native value accrual and seamless integration into Defi.</h4>
      <button className='bg-black rounded-4xl text-white px-8 py-1'>Try it now</button>
    </div>
  )
}

export default Hero