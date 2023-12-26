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

function Services() {


    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`${raleway.className} flex w-screen justify-center items-center my-64 bg-black text-white`}>

            <div>
                <div className={`${manrope.className}  font-normal`}>
                    <h1 className='text-6xl text-center'>✧Explore what we have done</h1>
                </div>


            </div>
        </motion.div>

    )
}

export default Services