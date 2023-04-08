import React from 'react'


export default function Hero() {
  return (
    <div className='max-w-7xl mx-auto relative text-white '>
        <img className='sm:mx-7 xl:mx-14 ' src="./img/hero.png" alt="" />
        <p className='text-xs sm:text-base lg:text-lg absolute top-2 sm:top-4 lg:top-7 xl:top-10 right-4 sm:right-12 lg:right-20 xl:right-52 hover:text-blue-600 cursor-pointer'>Get started</p>
        <div className='absolute top-10 sm:top-20 md:top-24 lg:top-36 xl:top-1/3 px-5 sm:px-12 lg:px-24 text-center '>
            <h2 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:pb-2 md:pb-4 xl:pb-6'>Take control of your car payments</h2>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg'>You could save $110+ a month on your car loan*</p>
        </div>
        <button className='w-36 sm:w-fit bg-blue-500 flex items-center gap-1 sm:gap-3 lg:gap-6 py-0.5 sm:py-2 lg:py-4 px-1 sm:px-4 lg:px-8 rounded-md mx-auto -mt-2 relative z-30 mb-5 sm:mb-10 hover:-translate-y-1 sm:hover:-translate-y-2 lg:hover:-translate-y-4 transition duration-700 text-xs sm:text-sm md:text-base'>
            <p>Check your rate for free!</p>
            <svg className='w-6' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 0.25C5.28663 0.25 0.25 5.28663 0.25 11.5C0.25 17.7134 5.28663 22.75 11.5 22.75C17.7134 22.75 22.75 17.7134 22.75 11.5C22.75 5.28663 17.7134 0.25 11.5 0.25ZM10.7046 6.20463C10.9156 5.99372 11.2017 5.87524 11.5 5.87524C11.7983 5.87524 12.0844 5.99372 12.2954 6.20463L16.7954 10.7046C17.0063 10.9156 17.1248 11.2017 17.1248 11.5C17.1248 11.7983 17.0063 12.0844 16.7954 12.2954L12.2954 16.7954C12.0832 17.0003 11.799 17.1137 11.504 17.1111C11.2091 17.1086 10.9269 16.9903 10.7183 16.7817C10.5097 16.5731 10.3914 16.2909 10.3889 15.996C10.3863 15.701 10.4997 15.4168 10.7046 15.2046L13.2843 12.625H7C6.70163 12.625 6.41548 12.5065 6.2045 12.2955C5.99353 12.0845 5.875 11.7984 5.875 11.5C5.875 11.2016 5.99353 10.9155 6.2045 10.7045C6.41548 10.4935 6.70163 10.375 7 10.375H13.2843L10.7046 7.79537C10.4937 7.58441 10.3752 7.29831 10.3752 7C10.3752 6.70169 10.4937 6.41559 10.7046 6.20463Z" fill="black"/>
            </svg>
        </button>
        <div className='text-black  text-sm md:text-base flex flex-col gap-3 ml-6 sm:ml-10 md:ml-0 md:flex-row  justify-around mb-8 sm:mb-14'>
          <div className='flex items-center gap-2'>
            <svg className='w-4 md:w-fit' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_24)">
              <path d="M27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27C20.9558 27 27 20.9558 27 13.5Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7697 7.83786C21.1635 8.19561 21.204 8.81661 20.8597 9.22611L12.5527 19.0699C12.473 19.1663 12.3745 19.2455 12.2633 19.3028C12.152 19.3601 12.0303 19.3942 11.9055 19.4032C11.7807 19.4121 11.6554 19.3956 11.5371 19.3548C11.4188 19.3139 11.3101 19.2495 11.2174 19.1655L6.23362 14.6914C6.0428 14.5163 5.92648 14.2747 5.90869 14.0163C5.89089 13.758 5.97298 13.5027 6.138 13.3031C6.21746 13.2059 6.31588 13.1258 6.42726 13.0678C6.53864 13.0098 6.66065 12.975 6.78588 12.9657C6.91111 12.9563 7.03694 12.9725 7.15571 13.0133C7.27448 13.0541 7.3837 13.1186 7.47675 13.203L11.7461 17.037L19.4299 7.93011C19.5099 7.83342 19.6088 7.75402 19.7204 7.69672C19.8321 7.63942 19.9542 7.60542 20.0795 7.59679C20.2047 7.58817 20.3303 7.60509 20.4488 7.64653C20.5673 7.68797 20.6772 7.75306 20.7697 7.83786Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1_24">
              <rect width="27" height="27" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <p>No impact to your credit score +</p>
            <svg className='w-4 md:w-fit' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2225 3.33335C8.45438 3.33335 6.75869 4.03573 5.50845 5.28598C4.25821 6.53622 3.55583 8.23191 3.55583 10C3.55583 11.7681 4.25821 13.4638 5.50845 14.7141C6.75869 15.9643 8.45438 16.6667 10.2225 16.6667C11.9906 16.6667 13.6863 15.9643 14.9365 14.7141C16.1868 13.4638 16.8892 11.7681 16.8892 10C16.8892 8.23191 16.1868 6.53622 14.9365 5.28598C13.6863 4.03573 11.9906 3.33335 10.2225 3.33335ZM1.88916 10C1.88916 5.39752 5.61999 1.66669 10.2225 1.66669C14.8242 1.66669 18.5558 5.39752 18.5558 10C18.5558 14.6025 14.8242 18.3334 10.2225 18.3334C5.61999 18.3334 1.88916 14.6025 1.88916 10Z" fill="black"/>
            <path d="M8.84168 11.51H10.7275V11.32C10.7275 10.6916 11.0275 10.3758 11.6058 10.0391C12.385 9.58915 12.9167 9.02331 12.9167 8.06331C12.9167 6.57665 11.65 5.83331 9.94418 5.83331C8.39001 5.83331 7.09918 6.56081 7.08334 8.29998H9.12918C9.12918 7.84581 9.49584 7.52498 9.92834 7.52498C10.3283 7.52498 10.6475 7.79415 10.6475 8.18915C10.6475 8.63248 10.26 8.90498 9.75251 9.23331C9.15668 9.61665 8.84168 10.02 8.84168 11.32V11.51ZM9.81668 14.1666C10.4033 14.1666 10.9267 13.6766 10.935 13.06C10.9267 12.4591 10.4033 11.9683 9.81668 11.9683C9.19668 11.9683 8.68918 12.4591 8.69751 13.06C8.68918 13.6766 9.19751 14.1666 9.81668 14.1666Z" fill="black"/>
            </svg>
          </div>
          <div className='flex items-center gap-2'>
            <svg className='w-4 md:w-fit' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_24)">
              <path d="M27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27C20.9558 27 27 20.9558 27 13.5Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7697 7.83786C21.1635 8.19561 21.204 8.81661 20.8597 9.22611L12.5527 19.0699C12.473 19.1663 12.3745 19.2455 12.2633 19.3028C12.152 19.3601 12.0303 19.3942 11.9055 19.4032C11.7807 19.4121 11.6554 19.3956 11.5371 19.3548C11.4188 19.3139 11.3101 19.2495 11.2174 19.1655L6.23362 14.6914C6.0428 14.5163 5.92648 14.2747 5.90869 14.0163C5.89089 13.758 5.97298 13.5027 6.138 13.3031C6.21746 13.2059 6.31588 13.1258 6.42726 13.0678C6.53864 13.0098 6.66065 12.975 6.78588 12.9657C6.91111 12.9563 7.03694 12.9725 7.15571 13.0133C7.27448 13.0541 7.3837 13.1186 7.47675 13.203L11.7461 17.037L19.4299 7.93011C19.5099 7.83342 19.6088 7.75402 19.7204 7.69672C19.8321 7.63942 19.9542 7.60542 20.0795 7.59679C20.2047 7.58817 20.3303 7.60509 20.4488 7.64653C20.5673 7.68797 20.6772 7.75306 20.7697 7.83786Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1_24">
              <rect width="27" height="27" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <p>No hidden fees</p>
            <svg className='w-4 md:w-fit' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2225 3.33335C8.45438 3.33335 6.75869 4.03573 5.50845 5.28598C4.25821 6.53622 3.55583 8.23191 3.55583 10C3.55583 11.7681 4.25821 13.4638 5.50845 14.7141C6.75869 15.9643 8.45438 16.6667 10.2225 16.6667C11.9906 16.6667 13.6863 15.9643 14.9365 14.7141C16.1868 13.4638 16.8892 11.7681 16.8892 10C16.8892 8.23191 16.1868 6.53622 14.9365 5.28598C13.6863 4.03573 11.9906 3.33335 10.2225 3.33335ZM1.88916 10C1.88916 5.39752 5.61999 1.66669 10.2225 1.66669C14.8242 1.66669 18.5558 5.39752 18.5558 10C18.5558 14.6025 14.8242 18.3334 10.2225 18.3334C5.61999 18.3334 1.88916 14.6025 1.88916 10Z" fill="black"/>
            <path d="M8.84168 11.51H10.7275V11.32C10.7275 10.6916 11.0275 10.3758 11.6058 10.0391C12.385 9.58915 12.9167 9.02331 12.9167 8.06331C12.9167 6.57665 11.65 5.83331 9.94418 5.83331C8.39001 5.83331 7.09918 6.56081 7.08334 8.29998H9.12918C9.12918 7.84581 9.49584 7.52498 9.92834 7.52498C10.3283 7.52498 10.6475 7.79415 10.6475 8.18915C10.6475 8.63248 10.26 8.90498 9.75251 9.23331C9.15668 9.61665 8.84168 10.02 8.84168 11.32V11.51ZM9.81668 14.1666C10.4033 14.1666 10.9267 13.6766 10.935 13.06C10.9267 12.4591 10.4033 11.9683 9.81668 11.9683C9.19668 11.9683 8.68918 12.4591 8.69751 13.06C8.68918 13.6766 9.19751 14.1666 9.81668 14.1666Z" fill="black"/>
            </svg>
          </div>
          <div className='flex items-center gap-2'>
            <svg className='w-4 md:w-fit' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_24)">
              <path d="M27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27C20.9558 27 27 20.9558 27 13.5Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7697 7.83786C21.1635 8.19561 21.204 8.81661 20.8597 9.22611L12.5527 19.0699C12.473 19.1663 12.3745 19.2455 12.2633 19.3028C12.152 19.3601 12.0303 19.3942 11.9055 19.4032C11.7807 19.4121 11.6554 19.3956 11.5371 19.3548C11.4188 19.3139 11.3101 19.2495 11.2174 19.1655L6.23362 14.6914C6.0428 14.5163 5.92648 14.2747 5.90869 14.0163C5.89089 13.758 5.97298 13.5027 6.138 13.3031C6.21746 13.2059 6.31588 13.1258 6.42726 13.0678C6.53864 13.0098 6.66065 12.975 6.78588 12.9657C6.91111 12.9563 7.03694 12.9725 7.15571 13.0133C7.27448 13.0541 7.3837 13.1186 7.47675 13.203L11.7461 17.037L19.4299 7.93011C19.5099 7.83342 19.6088 7.75402 19.7204 7.69672C19.8321 7.63942 19.9542 7.60542 20.0795 7.59679C20.2047 7.58817 20.3303 7.60509 20.4488 7.64653C20.5673 7.68797 20.6772 7.75306 20.7697 7.83786Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1_24">
              <rect width="27" height="27" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <p>No SSN required ++</p>
            <svg className='w-4 md:w-fit' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2225 3.33335C8.45438 3.33335 6.75869 4.03573 5.50845 5.28598C4.25821 6.53622 3.55583 8.23191 3.55583 10C3.55583 11.7681 4.25821 13.4638 5.50845 14.7141C6.75869 15.9643 8.45438 16.6667 10.2225 16.6667C11.9906 16.6667 13.6863 15.9643 14.9365 14.7141C16.1868 13.4638 16.8892 11.7681 16.8892 10C16.8892 8.23191 16.1868 6.53622 14.9365 5.28598C13.6863 4.03573 11.9906 3.33335 10.2225 3.33335ZM1.88916 10C1.88916 5.39752 5.61999 1.66669 10.2225 1.66669C14.8242 1.66669 18.5558 5.39752 18.5558 10C18.5558 14.6025 14.8242 18.3334 10.2225 18.3334C5.61999 18.3334 1.88916 14.6025 1.88916 10Z" fill="black"/>
            <path d="M8.84168 11.51H10.7275V11.32C10.7275 10.6916 11.0275 10.3758 11.6058 10.0391C12.385 9.58915 12.9167 9.02331 12.9167 8.06331C12.9167 6.57665 11.65 5.83331 9.94418 5.83331C8.39001 5.83331 7.09918 6.56081 7.08334 8.29998H9.12918C9.12918 7.84581 9.49584 7.52498 9.92834 7.52498C10.3283 7.52498 10.6475 7.79415 10.6475 8.18915C10.6475 8.63248 10.26 8.90498 9.75251 9.23331C9.15668 9.61665 8.84168 10.02 8.84168 11.32V11.51ZM9.81668 14.1666C10.4033 14.1666 10.9267 13.6766 10.935 13.06C10.9267 12.4591 10.4033 11.9683 9.81668 11.9683C9.19668 11.9683 8.68918 12.4591 8.69751 13.06C8.68918 13.6766 9.19751 14.1666 9.81668 14.1666Z" fill="black"/>
            </svg>
          </div>
        </div>
    </div>
  )
}