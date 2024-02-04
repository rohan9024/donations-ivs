"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import { Manrope } from 'next/font/google';
import Navbar from '../../../components/Navbar';
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
    const [desc, setDesc] = useState("")
    const [email, setEmail] = useState("")
    const submit = () => {

    }


    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className='lg:flex-row flex-col flex justify-center lg:justify-center items-center  lg:space-x-32   mx-10  lg:my-20  lg:mt-20'>

                <div className='flex flex-col justify-center items-center mt-20 space-y-5 lg:w-1/2 text-left pb-20 lg:pb-20 '>
                    <h1 className={`${manrope.className} text-4xl font-bold mb-10`}>About Us</h1>
                    <h1 className={`${manrope.className} text-xl  xl:text-2xl font-normal mb-10 leading-loose`}>IVS Education Council is non-profit organization started by people who have devoted most of their lives to educate children.
                        Under the supervision of the council we provide education to the students in India, to grow and be challenged; students will not only become a strong leader but also a purposeful citizen.
                        We develop students into unstoppable learners and leaders who are inspired to have an impact, determined to fulfill their potential, and driven to take control of their futures.
                        Our next generation must learn to be comfortable with rapid change, embrace uncertainty and have the confidence to solve problems and lead others. We educate our students in both academics and leadership to support the higher purpose of growth of India for a better future: to build learners who lead and are willing to contribute to the growth of India.
                    </h1>
                </div>

            </motion.div>

            <Footer />


        </>
    )
}

export default page