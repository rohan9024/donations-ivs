"use client"


import React from 'react'
import Navbar from '../../../components/Navbar'
import { motion } from "framer-motion"
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image'

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

                <h1 className={`${manrope.className} font-normal text-lg ml-5`}> <b>Company Name: </b> IVS Education Council <br />
                    <b>Current A/C No:</b> 50200090139710 <br />
                    <b>IFSC CODE:</b> HDFC0000482 <br />
                    <b>Swift code:</b> HDFCINBB <br />
                    <b>Branch: </b> ANAND LOK</h1>
                <Image
                    src="/UPI.jpg"
                    alt="UPI QR"
                    width={350}
                    height={350}
                    quality={100}
                    className='h-96 w-96 object-contain'
                />

            </motion.div>

        </>
    )
}

export default page