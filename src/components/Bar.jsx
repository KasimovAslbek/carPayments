import React from 'react'

export default function Bar() {
  return (
    <div className='max-w-7xl mx-auto  flex justify-between items-center py-4 xl:py-6 text-xs sm:text-sm md:text-base'>
        <div className='sm:flex sm:gap-5 ml-3 sm:ml-24 xl:ml-32 '>
            <p>Talk to our team to start saving</p>
            <p className='text-green-700'>1.877.445.0070</p>
        </div>
        <div className='mr-3 sm:mr-14 xl:mr-24 hover:text-green-600 cursor-pointer '>Login</div>
    </div>
  )
}
