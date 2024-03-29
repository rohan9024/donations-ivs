import React from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function Fourth() {
    return (
        <>
            {/* Small screens */}
            <div className='lg:hidden flex flex-col px-10 py-20 mt-10 bg-gray-100'>

                <motion.div
                    initial={{ opacity: 0, y: -120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='flex flex-col items-center space-y-5 md:space-y-10 md:items-start'>

                    <div className=''>
                        <Image
                            src="/fourth.jpeg"
                            width={1700}
                            height={1700}
                            alt="sideimage"
                            className='object-contain'
                        />
                    </div>
                    <div className={`${raleway.className}  space-y-5 my-6`}>
                        <h1 className='text-2xl md:text-5xl font-bold'>Your Support Matters<br /></h1>
                        <h1 className='text-lg md:text-2xl font-normal'>Partnering Together to Empower Learners, Build Leaders, and Create Bright Futures.</h1>
                    </div>
                </motion.div>
            </div>

            {/* Large screens */}
            <div className='hidden lg:flex flex-col px-32 py-20 mt-10 bg-gray-100'>
                <motion.div
                    initial={{ opacity: 0, y: -120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='flex items-center lg:space-x-28 space-x-12 space-y-12 '>
                    <div className={`${raleway.className} w-1/2  space-y-12`}>
                        <h1 className=' text-6xl font-bold'>Your Support Matters<br /></h1>
                        <h1 className='text-2xl font-normal'>Partnering Together to Empower Learners, Build Leaders, and Create Bright Futures.</h1>
                    </div>
                    <div className='w-1/2'>
                        <Image
                            src="/fourth.jpeg"
                            width={1700}
                            height={1700}
                            alt="sideimage"
                            className='object-contain'
                        />
                    </div>

                </motion.div>
            </div>
        </>

    )
}

export default Fourth