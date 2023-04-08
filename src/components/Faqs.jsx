import React from 'react'

export default function Faqs() {
  return (
    <div className='max-w-7xl mx-auto relative text-white '>
        <img className='xl:mx-14 ' src="./img/road.png" alt="" />
        <div className='absolute top-[5%] sm:top-[12%] md:top-[20%] xl:top-1/4 flex flex-col left-[10%] sm:left-[20%] lg:left-[25%] xl:left-[30%] items-center'>
            <h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'>No hidden fees.</h2>
            <h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl sm:py-4'>Co-borrowers welcome.</h2>
            <h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'>Fully online process.</h2>
            <p className='text-xs sm:text-base my-1 sm:my-4 lg:mt-9 lg:mb-12'>Got more questions? We've got answers.</p>
            <buttom className='bg-blue-500 py-2 lg:py-4 px-4 lg:px-8 rounded-md hover:bg-blue-900  transition duration-500 cursor-pointer text-xs sm:text-sm  md:text-base'>Search our FAQs</buttom>
        </div>
    </div>
  )
}
