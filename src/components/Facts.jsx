import React from 'react'

const Facts = () => {
  return (
    <div className='flex justify-between item-center mt-10 mb-10 gap-10'>

      <div className='card1 h-80 flex grow-1 flex-col justify-between items-start bg-[url("/background.png")] bg-bottom-right bg-cover p-5 rounded-xl'>
        <h2 className='text-3xl font-[400]'>Capital that grows</h2>
        <h4 className='w-75 text-xl font-[500] text-gray-600'>Earn passive income as your stablecoins are deployed into high-performing Defi protocols.</h4>
      </div>

      <div className='card2 h-80 flex flex-col justify-between items-start bg-[#2B2742] bg-bottom-right bg-cover p-5 rounded-xl'>
        <h2 className='text-3xl text-white font-[400]'>Always liquid,<br />always stable</h2>
        <h4 className='w-75 text-xl font-[500] text-slate-400'>Stayfully dollar-pegged with instant access to your funds - no lockups or delays.</h4>
      </div>

      <div className='card3 h-80 flex flex-col justify-between items-start bg-[#2B2742] bg-bottom-right bg-cover p-5 rounded-xl'>
        <h2 className='text-3xl text-white font-[400]'>100%<br />hands-free</h2>
        <h4 className='w-75 text-xl font-[500] text-slate-400'>No need to manage strategies manually. USD Bloom works in the background for you.</h4>
      </div>


    </div>
  )
}

export default Facts