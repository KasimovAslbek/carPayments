import React from 'react'

export default function Product() {
  return (
    <>
    <div className='max-w-7xl mx-auto '>
        <div className='mx-3 sm:mx-0 sm:flex gap-7 lg:gap-14 mb-10 sm:mb-20'>
            <div className='sm:w-1/2'>
                <img className='mx-auto' src="./img/app.png" alt="" />
            </div>
            <div className='sm:w-1/2 flex flex-col justify-center'>
                <h3 className='uppercase text-green-600 mb-2 text-sm md:text-base'>Did you get financing from your dealer?</h3>
                <h2 className='text-3xl lg:text-5xl md:w-2/3'>Fast, easy auto refinance</h2>
                <p className='text-sm md:text-base lg:text-lg mt-3 lg:mt-6 mb-4 lg:mb-8'>Instantly access competitive rates in minutes, with a dedicated team available to walk you through the process.</p>
                <button className='text-sm md:text-base lg:text-lg text-white bg-blue-500 w-fit py-2 lg:py-4 px-4 lg:px-8 rounded-md  hover:bg-blue-900  transition duration-500'>See how it works</button>
            </div>
        </div>
        <img className='w-fit mx-auto ' src="./img/man.png" alt="" />
    </div>
    <div className='bg-[#09414E] rounded-b-lg mb-10 sm:mb-28'>
        <div className='max-w-7xl mx-auto text-white px-4 py-8 md:pt-14 md:pb-10'>
            <p className='text-sm sm:text-base uppercase text-green-600'>find the right coverage for you</p>
            <h2 className='text-2xl sm:text-4xl lg:text-5xl'>Choose car insurance with confidence</h2>
            <p className='text-sm sm:text-base lg:text-lg py-4 md:pt-6 md:pb-9'>We shop and compare insurance quotes from trusted carriers in minutes, saving you time and the hassle of having to research on your own.</p>
            <button className='text-black text-sm sm:text-base lg:text-lg bg-white py-2 lg:py-4 px-4 lg:px-8 rounded-md hover:bg-blue-500  transition duration-500'>Get a quote</button>
        </div>
    </div>
    </>
  )
}
