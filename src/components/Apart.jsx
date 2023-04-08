import React from 'react'

export default function Apart() {
  const data = [
    {
      id: 1,
      img: "./img/iconNull.png",
      title: "Competitive rates",
      disc: "Gain access to affordable refi rates that could save you thousands over the life of your loan* and insurance quotes.",
    },
    {
      id: 2,
      img: "./img/iconConv.png",
      title: "Dedicated support",
      disc: "Our team of loan officers and insurance representatives are standing by, happy to help you through either process.",
    },
    {
      id: 3,
      img: "./img/iconSafe.png",
      title: "All in one place",
      disc: "Take control of your car finances when you apply for refinancing and car insurance through Caribou.",
    },
    {
      id: 4,
      img: "./img/iconClock.png",
      title: "Fast and easy",
      disc: "Quickly access offers with no hidden fees, no impact to your credit score and no SSN required.",
    },
  ]
  return (
    <div className='max-w-7xl mx-auto px-3 sm:px-7 md:px-20 pt-10 sm:pt-20 relative'>
        <div className='text-center pb-14 lg:pb-28'>
            <p className='uppercase text-green-600'>What sets us apart</p>
            <h2 className='text-4xl lg:text-5xl'>Tech to unlock low rates people to make the process easy</h2>
        </div>
        <div className='flex flex-col gap-6 lg:gap-8 mb-64 xl:mb-56'>
            {data.map(d=> (
            <div className='p-6 lg:p-9 rounded-lg shadow-xl border hover:-translate-y-2 md:hover:-translate-y-4 transition duration-700'>
              <img className='' src={d.img} alt=""/>
              <h2 className='text-xl md:text-2xl mt-3 md:mt-6 mb-2'>{d.title}</h2>
              <p className='text-sm md:text-lg'>{d.disc}</p>
            </div>
            ))}
        </div> 
        <div className='left-0 absolute -bottom-[370px] md:-bottom-[400px] lg:-bottom-[454px] w-full'>
            <div   className='bg-[#0075E3] mx-4 sm:mx-10 lg:mx-16 flex flex-col items-center py-9 md:py-14 lg:py-16 xl:py-24 rounded-3xl '>
                <h2 className='text-xl sm:text-3xl md:text-4xl xl:text-5xl text-white w-4/5 lg:w-3/5 text-center'>Through Caribou, you could start saving today!</h2>
                <button className='text-xs sm:text-sm md:text-base py-2 lg:py-4 px-4 lg:px-8 bg-white rounded mt-7 md:mt-12 hover:bg-blue-900  transition duration-500'>Refinance my loan</button>
            </div>
        </div>
    </div>
  )
}