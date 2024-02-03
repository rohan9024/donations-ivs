"use client"


import React from 'react'
import Navbar from '../../../components/Navbar'
import { motion } from "framer-motion"
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image'
import Footer from '../../../components/Footer';

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const manrope = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});


function page() {
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className=' flex-col flex justify-center lg:justify-center items-center  mx-10 my-10 lg:my-20 text-left'>
                {/* <h1 className={`${manrope.className} text-5xl font-bold xl:mb-10 mb-5`}>Be a ChangeMaker</h1> */}
                <h1 className={`${manrope.className} text-5xl font-bold xl:mb-10 mb-5 text-center `}>Be a ChangeMaker</h1>
                <h1 className={`${manrope.className} text-lg xl:text-2xl font-normal xl:mb-2 xl:w-[800px] text-gray-600 italic`}>Empower change with your generosity! Join us in making a difference</h1>
                <h1 className={`${manrope.className} text-lg xl:text-2xl font-normal xl:mb-10 xl:w-[800px] text-gray-600 italic`}>Every donation fuels impactful initiatives for a brighter future</h1>
                <div className='flex flex-col xl:flex-row justify-center items-center xl:space-x-20 my-10'>
                    <Image
                        src="/UPI.jpg"
                        alt="UPI QR"
                        width={350}
                        height={350}
                        quality={100}
                        className='h-96 w-96 object-contain'
                    />
                    <div className='flex flex-col'>

                        <h1 className={`${manrope.className} font-normal text-xl ml-5 space-y-5`}> <b>Company Name: </b> IVS Education Council  </h1>
                        <h1 className={`${manrope.className} font-normal text-xl ml-5 space-y-5`}> <b>Current A/C No:</b> 50200090139710 </h1>
                        <h1 className={`${manrope.className} font-normal text-xl ml-5 space-y-5`}> <b>IFSC CODE:</b> HDFC0000482 </h1>
                        <h1 className={`${manrope.className} font-normal text-xl ml-5 space-y-5`}> <b>Swift code:</b> HDFCINBB </h1>
                        <h1 className={`${manrope.className} font-normal text-xl ml-5 space-y-5`}> <b>Branch: </b> ANAND LOK </h1>
                    </div>
                </div>
            </motion.div>

            <Footer />

        </>
    )
}

export default page