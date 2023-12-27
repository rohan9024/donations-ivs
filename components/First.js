import React from 'react'
import { motion } from "framer-motion"
import { Raleway } from 'next/font/google';
import Image from 'next/image';


const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
function First() {
    return (
        <>
        <motion.div
      initial={{ opacity: 0, y: -120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
        className='lg:flex-row flex-col flex justify-center lg:justify-normal items-center space-y-4 md:space-y-12 lg:space-x-32 lg:space-y-12  lg:mx-28 mx-10 mt-10 lg:mt-20'>
        <div className='hidden lg:flex lg:w-1/2 h-full'>
            <Image
                src="/first.jpg"
                width={3000}
                height={3000}
                alt="sideimage"
                className='object-cover h-[700px] w-full '
            />
        </div>
        <div className='lg:hidden flex'>
            <Image
                src="/first.jpg"
                width={700}
                height={800}
                alt="sideimage"
                className=' object-cover h-[300px]'
            />
        </div>
        <div className={`${raleway.className} lg:w-1/2 lg:space-y-12 space-y-3 `}>
            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold tracking-wide'>IVS Education Council</h1>
            <h1 className='text-sm md:text-lg font-normal'>IVS Education Council provides education to the students in India, to grow and be challenged; students will not only become a strong learner but also a purposeful citizen. <br />

We develop students into unstoppable learners and leader who are inspired to make an impact, determined to fulfill their potential, and driven to take control of their futures. <br />

Our next generation must lean to be comfortable with rapid change, embrace uncertainty and have the confidence to solve problems and lead others. We educate our students in both academics and leadership to support the higher purpose for a better future: to build learners who lead and leaders who are willing to learn. <br />

We plan to develop world-class institutions across India that develops world-class leaders amongst our community. <br />

We are asking you to help support us. We are a non-profit that relies on support from people like you. If you donate we can continue to help students for years. <br />
</h1>
        </div>

    </motion.div>

    </>
    )
}

export default First