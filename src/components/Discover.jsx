import React from 'react'

export default function Discover() {
  return (
    <div className='bg-[#F8F8F8] rounded-lg'>
        <div className='max-w-7xl mx-auto'>
            <div className='px-8 md:px-0 pt-10 sm:pt-20 pb-9 lg:pb-14 flex flex-col items-center text-sm lg:text-base text-center'>
                <p className='text-xs sm:text-base uppercase text-green-600'>Are you getting the most out of your savings?</p>
                <h2 className='text-2xl sm:text-4xl lg:text-5xl text-center'>Discover how much you could save</h2>
                <p className='text-sm sm:text-base mt-5 mb-9 lg:mb-14'>Drivers could save more when they refinance and switch their car insurance through Caribou.</p>
                <button className='text-sm sm:text-base flex gap-5 hover:-translate-y-2 md:hover:-translate-y-4 transition duration-700'>
                    <p>Get started</p>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 0.25C5.28663 0.25 0.25 5.28663 0.25 11.5C0.25 17.7134 5.28663 22.75 11.5 22.75C17.7134 22.75 22.75 17.7134 22.75 11.5C22.75 5.28663 17.7134 0.25 11.5 0.25ZM10.7046 6.20463C10.9156 5.99372 11.2017 5.87524 11.5 5.87524C11.7983 5.87524 12.0844 5.99372 12.2954 6.20463L16.7954 10.7046C17.0063 10.9156 17.1248 11.2017 17.1248 11.5C17.1248 11.7983 17.0063 12.0844 16.7954 12.2954L12.2954 16.7954C12.0832 17.0003 11.799 17.1137 11.504 17.1111C11.2091 17.1086 10.9269 16.9903 10.7183 16.7817C10.5097 16.5731 10.3914 16.2909 10.3889 15.996C10.3863 15.701 10.4997 15.4168 10.7046 15.2046L13.2843 12.625H7C6.70163 12.625 6.41548 12.5065 6.2045 12.2955C5.99353 12.0845 5.875 11.7984 5.875 11.5C5.875 11.2016 5.99353 10.9155 6.2045 10.7045C6.41548 10.4935 6.70163 10.375 7 10.375H13.2843L10.7046 7.79537C10.4937 7.58441 10.3752 7.29831 10.3752 7C10.3752 6.70169 10.4937 6.41559 10.7046 6.20463Z" fill="black"/>
                    </svg>
                 </button>
            </div>
            <img className='mx-auto'  src="./img/woman.png" alt="" />
        </div>
    </div>
  )
}
