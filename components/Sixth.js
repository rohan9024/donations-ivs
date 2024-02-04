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

function Sixth() {
    return (
        <div className='flex flex-col py-20  xl:py-64 w-screen '>
            <motion.div
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className={`${manrope.className} flex flex-col justify-center items-center mx-10 xl:mx-64 xl:space-y-12 space-y-5 `}>
                <h1 className='text-2xl md:text-5xl xl:text-6xl font-bold'>What happens when you donate? <br /></h1>
                <h1 className='text-lg md:text-2xl xl:text-2xl font-normal '>IVS Education Council plans to develop world quality schools all across India and provide education at a reasonable cost.
                    Due to rising cost of education many children get no education.
                    We plan to develop world-class institutions across India that develops world-class leaders amongst our community.
                </h1>

            </motion.div>
        </div>
    )
}

export default Sixth