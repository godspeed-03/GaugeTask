import React from 'react'
import logo from '../assets/prop.webp'
import sheild from '../assets/sheild.png'
import check from '../assets/check.png'

function Section() {
    return (
        <>
            <>
                <section className=" mt-5 rounded-xl">
                    <div className="xl:container mx-auto lg:pt-16 pt-10">
                        <div className="text-gray-600">
                            <div className="lg:mx-auto  px-5 pb-24 text-center">
                                <div className="flex flex-row-reverse  max-lg:flex-col gap-6 lg:gap-4">
                                    <div className="">
                                        <img className='inline-block'
                                            alt="hero-img"
                                            src={logo}
                                        />
                                    </div>
                                    <div className=" my-auto">
                                        <div className="lg:py-4  ">
                                            <span className="trusttext flex text-center justify-center items-center mt-10">
                                                <img src={sheild} alt="" className=" w-7" />
                                                <h2>Customers’ Needs Above All Else</h2>
                                            </span>

                                        </div>

                                        <h1 className="headerText relative left-0 text-5xl text-black ">
                                            Take Control
                                            <br className="block" />
                                            <span className="text-rose-400 my-8">Monitor Usage & Change Filters</span>
                                            <br className="block" />
                                            <span className='my-8 relative left-0'>No Technician Needed</span>
                                        </h1>

                                        <p className=" relative left-0 my-8">
                                            We have crafted a product that addresses the real frustrations of a customer. The first step is to ensure there are zero service delays.
                                        </p>

                                        <div className="checksection">
                                            <div className="content flex my-8 ">
                                                <img src={check} alt="" className='w-7 object-contain relative top-0' />
                                                <div class="info-wrap">
                                                    <h2
                                                        class="text-xl lg:w-full mb-3 font-bold font-plusJakartaSans capitalize text-gray-800">
                                                        Smart Water Purifier With Self Servicing
                                                        Capability</h2>
                                                    <p
                                                        class="para font-normal font-plusJakartaSans text-base leading-relaxed text-gray-600 lg:pr-0">
                                                        Say goodbye to the hassle of scheduling a
                                                        technician for purifier maintenance with
                                                        our<span class="font-bold"> self-replacing
                                                        </span>filters.</p>
                                                </div>
                                            </div>
                                            <div className="content flex my-8">
                                                <img src={check} alt="" className='w-7 object-contain relative top-0' />
                                                <div class="info-wrap">
                                                    <h2
                                                        class="text-xl lg:w-full mb-3 font-bold font-plusJakartaSans capitalize text-gray-800">
                                                        Compensation For Service Delays</h2>
                                                    <p
                                                        class="para font-normal font-plusJakartaSans text-base leading-relaxed text-gray-600 lg:pr-0">
                                                        You are entitled to a compensation of <span
                                                            class="font-bold">100 Rs/Day </span>if
                                                        service is delayed for more than 24 hours.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center mx-auto relative">
                                            <button className="inline-flex text-white focus:outline-none border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-5 text-base font-semibold mt-3">
                                                Take a Product Tour
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Section