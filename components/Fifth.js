import React from 'react'
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

function Fifth() {
    return (
        <div className='flex flex-col py-20  xl:py-64 w-screen '>
            <motion.div
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className={`${manrope.className} flex flex-col justify-center items-center mx-10 xl:mx-64 xl:space-y-12 space-y-5 `}>
                <h1 className='text-2xl md:text-5xl xl:text-6xl font-bold'>Our Mission<br /></h1>
                <h1 className='text-lg md:text-2xl xl:text-2xl font-normal '>When you make a donation this money goes towards a scholarship that is given to deserving high school students who then study for free.
                    We are asking you to help support us. We are a non-profit that relies on support from people like you. The per year tuition fees for a student to study in a good institute is Rs.1 lakh or USD 1250. Kindly donate generously to give these well deserving children a right to good education.
                </h1>

            </motion.div>
        </div>
    )
}

export default Fifth