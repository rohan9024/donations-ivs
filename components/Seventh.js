import React from 'react'
import { motion } from "framer-motion"
import { Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function Seventh() {
    return (
        <div className='flex flex-col py-20  xl:py-64 w-screen '>
            <motion.div
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className={`${manrope.className} flex flex-col justify-center items-center mx-10 xl:mx-64 `}>
                <h1 className='text-2xl md:text-5xl xl:text-6xl font-bold'>Meet Our Team<br /></h1>
                <h1 className='text-lg md:text-2xl xl:text-2xl font-normal mt-12 xl:text-center text-left'>The council consists of the siblings from Sharma family. <br /> They have a combined experience of over 30 years in the education industry. </h1>

                <div className='flex xl:flex-row xl:space-x-16 flex-col justify-center items-center mt-20 xl:space-y-0 space-y-5'>
                    <div class={`${manrope.className} cursor-pointer relative flex flex-col text-gray-700 bg-white shadow-md border hover:bg-gray-100 hover:shadow-xl transition hover:ease-in hover:-translate-y-2 hover:duration-500  bg-clip-border rounded-xl w-96`}>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-2">
                                <p class="block  text-lg antialiased  leading-relaxed text-blue-gray-900 font-bold">
                                    Mr. Sachin Sharma, <br /> Director
                                </p>
                                <Link href="https://www.linkedin.com/in/dsachinsharma/">
                                    <Image
                                        height={50}
                                        width={50}
                                        quality={100}
                                        src="/linkedin.png"
                                        alt="linkedin"
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div class={`${manrope.className} cursor-pointer relative flex flex-col text-gray-700 bg-white shadow-md border hover:bg-gray-100 hover:shadow-xl transition hover:ease-in hover:-translate-y-2 hover:duration-500  bg-clip-border rounded-xl w-96`}>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-2">
                                <p class="block  text-lg antialiased  leading-relaxed text-blue-gray-900 font-bold">
                                    Ms. Ruchika Sharma, <br /> Director
                                </p>
                                <Link href="https://www.linkedin.com/in/ivssolutions/">
                                    <Image
                                        height={50}
                                        width={50}
                                        quality={100}
                                        src="/linkedin.png"
                                        alt="linkedin"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </motion.div>
        </div>
    )
}

export default Seventh