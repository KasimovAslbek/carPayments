import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";





export default function Customers() {
    const data = [
        {
          id: 1,
          notion: "The application process was easy, and the loan officer was great at communicating the next steps. The whole process, from the application to the funding, took two weeks. My interest rate, as well as my monthly payments, went down.",
          name: "Amina",
          date: "November 18, 2022",
        },
        {
            id: 2,
            notion: "We wanted to refinance our vehicle because our old lender kept making mistakes and providing poor service. Not only did Caribou provide excellent service, but they helped us lower our rate, term and payment! What a nice surprise and a great experience!",
            name: "Jessie",
            date: "October 25, 2022",
        },
        {
            id: 3,
            notion: "The refi experience with Caribou was quick and easy. Fill out a form online, get an email and call within a few days, and boom, new low car payment in a couple of weeks. They did all the heavy lifting, were pleasant, helpful, and informative.",
            name: "Danny",
            date: "September 28, 2022",
        },
        {
            id: 4,
            notion:  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas expedita quisquam, cum architecto necessitatibus deserunt praesentium quos commodi tenetur repellendus unde ex facere, at accusamus suscipit. Cum quo commodi consectetur.",
            name: "Tom",
            date: "March 21, 2023",
        },
        {
            id: 5,
            notion:  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas expedita quisquam, cum architecto necessitatibus deserunt praesentium quos commodi tenetur repellendus unde ex facere, at accusamus suscipit. Cum quo commodi consectetur.",
            name: "John",
            date: "April 5, 2023",
        },


    ]

  return (
    <>

    <div className='max-w-7xl mx-auto px-4 sm:px-12 py-7 sm:py-20 flex'>
        <div>
            <p className='text-xs sm:text-sm md:text-base uppercase text-green-600 '>Customer stories</p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:w-2/3 lg:w-1/2 mb-5 sm:mb-10 lg:mb-20'>75,000+ happy drivers with more cash in their wallets</h2>
            <div className='sm:flex gap-2'>
                <div className='flex'>
                    <svg className="w-4 md:w-fit" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                    </svg>
                    <svg className="w-4 md:w-fit" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                    </svg>
                    <svg className="w-4 md:w-fit" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                    </svg>
                    <svg className="w-4 md:w-fit" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                    </svg>
                    <svg className="w-4 md:w-fit" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                    </svg>
                </div>
                <p className='text-sm sm:text-base md:text-lg'>4.5 star reviews from our clients on <span className='text-green-500'>Trustpilot</span></p>
            </div>
        </div>
        <div className='hidden sm:flex items-center  gap-16  '>
            <img className='h-fit' src="./img/VectorRight.png" alt="" />
            <img className='h-fit hidden xl:block' src="./img/VectorRight.png" alt="" />
        </div>
    </div>
    <Swiper

        pagination={{
          clickable: true,
        }}
        breakpoints={{
            350: {
                slidesPerView: 1.2,
                spaceBetween: 4,
              },

            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 25,
            },
            1200: {
                slidesPerView: 3.2,
                spaceBetween: 32,
              },
          }}
        className="mySwiper"
      >
    <div className='max-w-7xl mx-auto flex '>
    {data.map(d=> (
        <SwiperSlide className="mb-10 md:mb-36 mx-3">
            <div className=' rounded-lg shadow-xl border hover:translate-y-3 transition duration-700'>
            <div className=' p-6 xl:p-8 text-sm xl:text-base'>
                <div className='flex'>
                        <svg className="w-4 lg:w-5 xl:w-fitt" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                        </svg>
                        <svg className="w-4 lg:w-5 xl:w-fitt" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                        </svg>
                        <svg className="w-4 lg:w-5 xl:w-fitt" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                        </svg>
                        <svg className="w-4 lg:w-5 xl:w-fitt" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                        </svg>
                        <svg className="w-4 lg:w-5 xl:w-fitt" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4008 1.55243C10.8136 0.504657 12.2215 0.504657 12.6355 1.55243L15.0565 7.68832L21.3392 8.2186C22.4141 8.30805 22.8487 9.72382 22.0292 10.4637L17.2452 14.7813L18.7075 21.2404C18.9581 22.3457 17.8202 23.2197 16.9002 22.6281L11.5182 19.1666L6.13495 22.6294C5.21495 23.221 4.07705 22.347 4.32763 21.2417L5.78995 14.7825L1.00474 10.4624C0.186421 9.72382 0.621 8.3106 1.69474 8.21988L7.97737 7.6896L10.4008 1.55243Z" fill="black"/>
                        </svg>
                </div>
                <p className='py-4 lg:py-6 xl:py-8 text-[#191C22]'>{d.notion}</p>
                <p>{d.name}</p>
                <div className='flex gap-2'>
                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 18.5713L11.6382 19.3498H11.6337L11.6247 19.3441L11.5977 19.3327C11.4433 19.2631 11.2911 19.1917 11.141 19.1184C9.33669 18.24 7.66112 17.2598 6.13475 16.1898C3.446 14.2913 0.500748 11.5313 0.500748 8.43984C0.500748 6.34269 1.74725 4.32126 3.98825 2.82555C5.08096 2.08699 6.39928 1.49757 7.86272 1.09328C9.32617 0.688995 10.904 0.478321 12.5 0.474121C14.0958 0.478137 15.6736 0.688588 17.137 1.09263C18.6004 1.49667 19.9188 2.08582 21.0117 2.82412C23.2624 4.34348 24.5104 6.35266 24.4992 8.43841C24.4992 11.5313 21.554 14.2913 18.8652 16.187C17.2381 17.3268 15.4418 18.3644 13.5012 19.2855C13.4683 19.3009 13.4353 19.3161 13.4022 19.3313L13.373 19.3427L13.3662 19.347H13.3617C13.3617 19.347 13.3617 19.3498 12.5 18.5698V18.5713ZM12.5 18.5713L13.3617 19.3498C13.1092 19.4621 12.8083 19.5223 12.5 19.5223C12.1917 19.5223 11.8908 19.4621 11.6382 19.3498L12.5 18.5713ZM6.49925 8.09555C6.4838 7.5891 6.62757 7.08578 6.92214 6.61503C7.21671 6.14427 7.65617 5.71554 8.21482 5.35391C8.77347 4.99228 9.44008 4.70501 10.1757 4.5089C10.9113 4.31279 11.7011 4.21178 12.4989 4.21178C13.2967 4.21178 14.0865 4.31279 14.8221 4.5089C15.5577 4.70501 16.2243 4.99228 16.7829 5.35391C17.3416 5.71554 17.781 6.14427 18.0756 6.61503C18.3702 7.08578 18.5139 7.5891 18.4985 8.09555C18.4681 9.09306 17.8226 10.0432 16.7008 10.7418C15.5789 11.4404 14.0702 11.8318 12.4989 11.8318C10.9275 11.8318 9.41882 11.4404 8.29698 10.7418C7.17515 10.0432 6.52967 9.09306 6.49925 8.09555Z" fill="black"/>
                    </svg>
                    <p>{d.date}</p>
                </div>
            </div>
        </div>
        </SwiperSlide>
        ))}

    </div>
    </Swiper>
    </>
  )
}

