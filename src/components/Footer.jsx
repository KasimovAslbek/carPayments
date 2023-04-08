import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#191C22]'>
        <div className='pt-44 md:pt-72 xl:pt-96 text-white max-w-7xl mx-auto sm:grid grid-cols-3 gap-y-10 xl:flex justify-between pb-10 px-7 space-y-5 sm:space-y-0 sm:px-3 md:px-12 lg:px-24 xl:px-36'>
            <div>
                <div className='flex mb-3 gap-3'>
                    <img src="./img/logo.png" alt="" />
                    <img className='my-auto' src="./img/caribou.png" alt="" />
                </div>
                <div className='flex gap-4'>
                    <img className='hover:translate-y-2 transition duration-700 cursor-pointer' src="./img/tweet.png" alt="" />
                    <img className='hover:translate-y-2 transition duration-700 cursor-pointer' src="./img/instogram.png" alt="" />
                    <img className='hover:translate-y-2 transition duration-700 cursor-pointer' src="./img/facebook.png" alt="" />
                    <img className='hover:translate-y-2 transition duration-700 cursor-pointer' src="./img/linkedin.png" alt="" />
                </div>

            </div>
            <div>
                <h2 className='text-lg mb-8'>Products</h2>
                <ul className='text-sm text-[#D1D1D1] space-y-4'>
                    <li><a href="#">Refinance</a></li>
                    <li><a href="#">Insurance</a></li>
                </ul>
            </div>
            <div>
                <h2 className='text-lg mb-8'>Company</h2>
                <ul className='text-sm text-[#D1D1D1] space-y-4'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Lending Partners</a></li>
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
            </div>
            <div>
                <h2 className='text-lg mb-8'>Resources</h2>
                <ul className='text-sm text-[#D1D1D1] space-y-4'>
                    <li><a href="">Resource Center</a></li>
                    <li><a href="">Learning Library</a></li>
                    <li><a href="">Find Savings by Vehicle</a></li>
                    <li><a href="">Refinance Calculator</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Glossary</a></li>
                </ul>
            </div>
            <div className='text-[#D1D1D1] text-sm xl:w-1/6'>
                <h2 className='text-lg text-white mb-7 md:mb-16'>Contact Details</h2>
                <p className='mb-4'>NMLS #1746612</p>
                <p>1.877.445.0070</p>
                <p>Mon - Fri: 9am - 8pm EST</p>
                <p >Sat - Sun: 9am - 4pm EST</p>
                <p className='mt-7 md:mt-16 mb-4'>1717 Rhode Island Ave, NW, Suite 500 Washington, DC 20036</p>
                <p>Caribou Insurance Services, LLC</p>
                <p>1.877.255.2660</p>
                <p>Mon - Fri: 9am - 8pm ET</p>
                <p className='mb-7'>insurance@gocaribou.com</p>
                <p>contact@gocaribou.com</p>
            </div>
        </div>
    </div>
    
  )
}
