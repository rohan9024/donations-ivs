"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import { Manrope } from 'next/font/google';
import Navbar from '../../../components/Navbar';


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
                className='lg:flex-row flex-col flex justify-center lg:justify-center items-center  lg:space-x-32   mx-10 lg:mt-20'>
       <Image
                    src="/contactBackground.jpg"
                    width={3000}
                    height={3000}
                    alt="sideimage"
                    className=' object-contain h-auto w-1/2 hidden lg:flex' 
                    />


                <div className=' flex lg:hidden w-screen'>
                    <Image
                        src="/contactBackground.jpg"
                        width={3000}
                        height={3000}
                        alt="sideimage"
                        className=' object-cover h-[350px]'
                    />
                </div>
                    <div className='flex flex-col justify-center items-center mt-20 space-y-5 lg:w-1/2'>
                        <h1 className={`${raleway.className} text-4xl font-bold mb-10`}>Contact Us</h1>
                        <form className='flex flex-col justify-center items-center'>
                            <input onChange={(e) => setEmail(e.target.value)} required type="text" placeholder="Enter Email" className={`${manrope.className} placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-96`} />
                            <input onChange={(e) => setDesc(e.target.value)} required type="text" placeholder="Description" className={`${manrope.className}  mt-10 placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-96 `} />


                            <div disabled={!email || !desc} type="submit" onClick={submit} class="cursor-pointer mt-10 px-36 py-4 bg-black text-white rounded-lg">
                                <span class="relative text-center">Submit</span>
                            </div>

                        </form>
                    </div>

            </motion.div>

        </>
    )
}

export default page