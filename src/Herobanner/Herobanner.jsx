import React from 'react'
import banner from '../assets/banner.webp'

function Herobanner() {
    return (
        <>
            <section className=" bg-[#160052] rounded-xl">
      <div className="xl:container mx-auto lg:pt-16 pt-10">
        <div className="text-gray-600">
          <div className="lg:mx-auto flex flex-row px-5 pb-24 text-center">
            <div className="flex   max-lg:flex-col gap-6 lg:gap-4">
              <div className="mx-5 w-full">
                <img className='inline-block'
                  alt="hero-img"
                  src={banner}
                />
              </div>
              <div className=" mt-1 md:mt-0">
                <div className="lg:py-4 flex flex-col justify-center items-center">
                  <h1 className=" text-center text-white  text-6xl max-md:text-4xl font-light px-5">
                    Gauge Water Purifier{' '}
                        <span className="text-transparent bg-gradient-to-r from-rose-800 to-orange-500 bg-clip-text">Puts An End</span>{' '}
                    <span className="after-text">To RO Service Pain</span>
                  </h1>
                </div>
                <p className="px-20  my-3 mx-5">
                  Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience.
                </p>
                <div className="flex flex-col justify-center items-center mx-auto relative">
                  <button className="inline-flex text-white focus:outline-none border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-5 text-base font-semibold mt-3">
                    Take a Product Tour
                  </button>
                  <p className="text-center font-medium text-base mt-4">
                    Experience Convenience Like Never Before With Our Smart Water Purifier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Herobanner