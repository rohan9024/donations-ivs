import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});
function Footer() {
    return (
        <div className='flex flex-col bg-black text-gray-300 font-dmsans shadow-t-lg'>
            <div className='flex justify-center items-center bg-gray-200 shadow-b-2xl'>
                <div className={`${raleway.className} p-10 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300`} >
                    <Image
                        src="/logo.png"
                        width={90}
                        height={90}
                        alt="logo"
                        className='object-contain rounded-full'
                    />
                </div>
            </div>
            <div className='w-4/5 mx-auto my-10 text-center flex justify-center items-center space-x-32'>
                <div className='flex flex-col justify-start items-center'>

                    <h1 className={`${manrope.className} my-4 font-bold text-2xl hover:cursor-pointer`}>Contact Information</h1>
                    <h1 className={`${manrope.className} my-4 hover:cursor-pointer`}> 2003, Agarwal Trinity Tower <br /> Malad West, Mumbai, <br /> Maharashtra - 400064, India</h1>
                </div>
                <div className='flex flex-col justify-start items-center'>

                    <h1 className={`${manrope.className} my-4 font-bold text-2xl hover:cursor-pointer`}>Social Media Links</h1>
                    <section className='flex space-x-10 items-center justify-center'>
                        <a href="https://twitter.com/IVSSolutions">
                            <Image
                                src="/twitter.png"
                                width={40}
                                height={40}
                                alt="twitter icon"
                                className='object-contain transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-2xl' />
                        </a>
                        <a href="https://www.linkedin.com/in/ivssolutions/?originalSubdomain=in">
                            <Image
                                src="/linkedin.png"
                                width={40}
                                height={40}
                                alt="linkedin icon"
                                className='object-contain  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'
                            />
                        </a>
                        <a href="https://www.facebook.com/ivssolutions">
                            <Image
                                src="/facebook.png"
                                width={40}
                                height={40}
                                alt="facebook icon"
                                className='object-contain transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'
                            />
                        </a>
                    </section>
                </div>
            </div>
            <section className={`${manrope.className} md:text-xl text-sm my-2 md:my-6 text-center text-gray-300 `}>
                        <h1>© 2023 All Rights Reserved- IVS Solutions</h1>
                    </section>
        </div >
    )
}

export default Footer